"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory, Response
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User, Channel, Following,Videos, Img, Banner, Movie, Messages
from api.routes import api
from api.admin import setup_admin
from sqlalchemy import exc
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import cloudinary
import cloudinary.uploader

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# Setup the Flask-JWT-Extended extension
app.config["JWT_SECRET_KEY"] = "SS6FXQ3RrA7oGCsZ"  # Change this!
jwt = JWTManager(app)

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

@app.route('/users', methods=['GET'])
def get_all_user():
    users = User.query.all()
    return jsonify([user.serialize() for user in users]), 200

# --- Get the data of the current user ----------
@app.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    current_user_id = get_jwt_identity()
    user=User.query.filter_by(id=current_user_id).first()
    return jsonify([user.serialize()])

# ----------- Get the channel of the current user -------------
@app.route('/userChannel', methods=['GET'])
@jwt_required()
def get_userChannel():
    current_user_id = get_jwt_identity()
    user=User.query.filter_by(id=current_user_id).first()
    channel = Channel.query.filter_by(userChannel=current_user_id).first()
    return jsonify(channel.biography)


@app.route('/signup', methods=['POST'])
def signup():
    username, email, phone, password_hash = request.json.get(
        'username', None
    ), request.json.get(
        'email', None
    ), request.json.get(
        'phone', None
    ), request.json.get(
        'password_hash', None
    )

    if not (username and email and phone and password_hash):
        return jsonify({
            'message': "Data not provided"
        }), 400

    
    myUser = User(username=username, email=email, phone=phone, password_hash=password_hash)

    try:
        user = myUser.create()
        hash = generate_password_hash(user.password_hash)
        user.password_hash = hash
        db.session.commit()
        access_token = create_access_token(identity=user.id)
        myChannel=Channel(userChannel=user.id, biography="This is your BIO")
        try:
            newChannel = myChannel.create()
        except exc.IntegrityError:
            return jsonify({'message': myChannel.serialize()})
        return jsonify({'message': 'User created', 'access_token':access_token}), 201
    except exc.IntegrityError:
        return jsonify({'message': 'Data provided is not valid'})


@app.route("/login", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password_hash = request.json.get("password_hash", None)
    user = User.query.filter_by(username=username).first()
    valid_password = check_password_hash(user.password_hash, password_hash)
    if user is None:
        return jsonify({"msg": "Bad name"}), 401
    elif valid_password:
        access_token = create_access_token(identity=user.id)
        return jsonify({"access_token": access_token})
    else:
        return jsonify({
            "message": "Invalid authentication",
        }), 401

@app.route("/videos", methods=["POST"])
@jwt_required()
def add_video():
    title = request.json.get("title", None)
    source = request.json.get("source", None)
    # sizeVideo = request.json.get("sizeVideo", None)
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    channel= Channel.query.filter_by(userChannel=user.id).first()
    myVideo=Videos(channelVideo=channel.id, title=title, source=source, sizeVideo=140)
    try:
        newVideo = myVideo.create()
        return jsonify({'message': myVideo.serialize()}), 200
    except exc.IntegrityError:
        return jsonify({'message': fatal})

@app.route('/videos', methods=['GET'])
def get_all_videos():
    videos = Videos.query.all()
    return jsonify([video.serialize() for video in videos]), 200

@app.route('/channel', methods=['GET'])
def get_all_channel():
    channels = Channel.query.all()
    return jsonify([channel.serialize() for channel in channels]), 200


#------------- ADD A FOLLOWING ---------------

@app.route("/follow", methods=["POST"])
@jwt_required()
def user_followings():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    followUser= request.json.get("followUser", None)
    userToFollow = User.query.filter_by(username=followUser).first()

    if userToFollow is None:
        return jsonify({"msg": "Bad user"}), 401
    
    myFollowing=Following(followUser=userToFollow.username, userFollowing=user.id)
    try:
        newFollow = myFollowing.create()
        return jsonify({'message':"Following User" }), 200
    except exc.IntegrityError:
        return jsonify({'message': 'Data provided is not valid'})

@app.route("/follow", methods=["GET"])
@jwt_required()
def user_getfollowings():
    current_user_id = get_jwt_identity()
    follow = Following.query.filter_by(userFollowing=current_user_id)
    return jsonify([follows.serialize() for follows in follow]), 200

@app.route("/image", methods=["POST"])
@jwt_required()
def handle_upload():
    current_user_id = get_jwt_identity()
    # validate that the front-end request was built correctly
    if 'profile_image' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['profile_image'])

        # fetch for the user
        # user1 = User.query.get(user_id)
        # update the user with the given cloudinary image URL

        myImg=Img(img=result['secure_url'], imgUser=current_user_id)
        try:
            newImg = myImg.create()
            return jsonify({'message': myImg.serialize()}), 200
        except exc.IntegrityError:
            return jsonify({'message': fatal})

@app.route("/img", methods=["GET"])
def getIMG():
    imgs = Img.query.all()
    return jsonify([img.serialize() for img in imgs]), 200

@app.route('/image', methods=["GET"])
@jwt_required()
def get_img():
    current_user_id = get_jwt_identity()
    img = Img.query.filter_by(imgUser=current_user_id).first()
    if not img:
        return jsonify([""]), 404
    img_url = img.img
    return jsonify([img_url])

@app.route("/banner", methods=["POST"])
@jwt_required()
def handle_upload_banner():
    current_user_id = get_jwt_identity()
    # validate that the front-end request was built correctly
    if 'profile_banner' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['profile_banner'])

        # fetch for the user
        # user1 = User.query.get(user_id)
        # update the user with the given cloudinary image URL

        myBanner=Banner(banner=result['secure_url'], banenrUser=current_user_id)
        try:
            newBanner = myBanner.create()
            return jsonify({'message': myBanner.serialize()}), 200
        except exc.IntegrityError:
            return jsonify({'message': fatal})

@app.route("/ban", methods=["GET"])
def getban():
    banners = Banner.query.all()
    return jsonify([banner.serialize() for banner in banners]), 200

@app.route('/banner', methods=["GET"])
@jwt_required()
def get_ban():
    current_user_id = get_jwt_identity()
    banner = Banner.query.filter_by(banenrUser=current_user_id).first()
    if not banner:
        return jsonify([""]), 404
    banner_url = banner.banner
    return jsonify([banner_url])
    
@app.route("/movie", methods=["POST"])
@jwt_required()
def handle_upload_movie():
    current_user_id = get_jwt_identity()
    # validate that the front-end request was built correctly
    if 'movieFile' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['movieFile'], resource_type="video")

        # fetch for the user
        # user1 = User.query.get(user_id)
        # update the user with the given cloudinary image URL

        myMovie=Movie(movie=result['secure_url'], movieUser=current_user_id)
        try:
            newMovie = myMovie.create()
            return jsonify({'message': myMovie.serialize()}), 200
        except exc.IntegrityError:
            return jsonify({'message': fatal})

@app.route("/mov", methods=["GET"])
def getmov():
    movies = Movie.query.all()
    return jsonify([movie.serialize() for movie in movies]), 200

@app.route('/movie', methods=["GET"])
@jwt_required()
def get_mov():
    current_user_id = get_jwt_identity()
    movie = Movie.query.filter_by(movieUser=current_user_id)
    if not movie:
        return jsonify([""]), 404
    movie_url = movie.movie
    return jsonify([movi.serialize() for movi in movie_url]), 200

@app.route('/movie', methods=["PUT"])
@jwt_required()
def config_movie():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    movie = Movie.query.filter_by(movieUser=user.id).order_by(Movie.id.desc()).first()

    # return jsonify({'message': movie.serialize()}), 201
    try:
        # resp = Response()
        #Data validation
        if "title" in request.json: movie.title = request.json["title"]
        if "catMov" in request.json: movie.catMov = request.json["catMov"]
        if "sizeVideo" in request.json: movie.sizeVideo = request.json["sizeVideo"]
        db.session.commit()
        # resp.message = "Profile updated succesfull"
        return jsonify({'message': 'flamitaa'}), 201
    except exc.IntegrityError:
        return jsonify({'message': 'Data provided is not valid'})

@app.route('/configuration', methods=["PUT"])
@jwt_required()
def config_setting():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    try:
        if "password_hash" in request.json: user.password_hash = request.json["password_hash"]
        if "email" in request.json: user.email = request.json["email"]
        hash = generate_password_hash(user.password_hash)
        user.password_hash = hash
        db.session.commit()
        return jsonify({'message': 'change setting'}), 201
    except exc.IntegrityError:
        return jsonify({'message': 'Data provided is not valid'})
#--------------MENSAJES-------------

# Coge los mensajes de un usuario actualmente logueado y los devuelve
@app.route('/message', methods=["GET"])
@jwt_required()
def get_msg():
    current_user_id = get_jwt_identity()
    msg = Messages.query.filter_by(userMessages=current_user_id)

    if not msg:
        return jsonify({'message': 'Message Not Found!'}), 404
    
    return jsonify([msgs.serialize() for msgs in msg]), 200

# Crear una entrada de un mensaje en la tabla del usuario destinatario
@app.route('/message', methods=["POST"])
@jwt_required()
def post_msg():
    #Cogemos el usuario que crea el mensaje, el propio mensaje y el usuario destino
    current_user_id = get_jwt_identity()
    user=User.query.filter_by(id=current_user_id).first()
    # mensagito = msg.messages
    # usuarioDest = msg.userMessages
    mensagito = request.json.get("messages", None)
    usuarioDest = request.json.get("userMessages", None)
    #Buscamos la tabla de mensajes asociada a dicho usuario y le creamos una entrada
    userDest = User.query.filter_by(username=usuarioDest).first()
    

    myMessage = Messages(userOrig=user.username, messages=mensagito, userMessages=userDest.id)
    try:
        #Creamos una nueva entrada con los datos del mensaje
        newMsg = myMessage.create()
        return jsonify({'message': 'Mensaje enviado' }), 200
    except exc.IntegrityError:
        return jsonify({'message': 'Data provided is not valid for message'})


@app.route('/message/<int:id>', methods=["DELETE"])
@jwt_required()
def delete_message(id):
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    msg = Messages.query.filter_by(userMessages=user.id, id=id)
    try:
        db.session.delete(msg[0])
        db.session.commit()
        return jsonify({'message': 'Message deleted'}), 201
    except exc.IntegrityError:
        return jsonify({'message': 'Data provided is not valid'})


#------------ PUTIN -------------------

@app.route('/profile', methods=["PUT"])
@jwt_required()
def config_profile():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    canal = Channel.query.filter_by(userChannel=user.id).first()
    # return jsonify({'message': canal.biography}), 201
    try:
        # resp = Response()
        #Data validation
        if "username" in request.json: user.username = request.json["username"]
        if "biography" in request.json: canal.biography = request.json["biography"]
        db.session.commit()
        # resp.message = "Profile updated succesfull"
        return jsonify({'message': 'flamitaa'}), 201
    except exc.IntegrityError:
        return jsonify({'message': 'Data provided is not valid'})


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)