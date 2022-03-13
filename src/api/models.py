from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    phone = db.Column(db.String(40), nullable=False)
    password_hash=db.Column(db.String(250))
    following = relationship("Following")
    channel = relationship("Channel")
    messages = relationship("Messages")
    images = relationship("Img")
    banner = relationship("Banner")
    movie = relationship("Movie")

    def __repr__(self):
        return '<User %r>' % (self.username)

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "phone": self.phone
            # do not serialize the password, its a security breach
        }
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_by_id(cls, id):
        user = cls.query.get(id)
        return user

    @classmethod
    def get_all(cls):
        user = cls.query.all()
        return user

    @classmethod
    def delete(self):
        user = User.query.get(self.id)
        db.session.delete(user)
        db.session.commit()
        return self

class Channel(db.Model):
    __tablename__ = 'channel'
    id = db.Column(db.Integer, primary_key=True)
    biography = db.Column(db.String(10000), nullable=True)
    socialNetwork = db.Column(db.String(150), nullable=True)
    userChannel = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    config = relationship("Config")
    sourceImg = relationship("Source")
    sourceVideos = relationship("Videos")

    def __repr__(self):
        return '<Channel %r>' % (self.id)

    def serialize(self):
        return {
            "id": self.id,
            "biography": self.biography,
            "socialNetwork": self.socialNetwork,
            "userChannel": self.userChannel
        }
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_by_id(cls, id):
        channel = cls.query.get(id)
        return channel

    @classmethod
    def get_all(cls):
        channel = cls.query.all()
        return channel

    @classmethod
    def delete(self):
        channel = Channel.query.get(self.id)
        db.session.delete(channel)
        db.session.commit()
        return self

class Source(db.Model):
    __tablename__ = 'source'
    id = db.Column(db.Integer, primary_key=True)
    source = db.Column(db.String(150), nullable=False)
    channelImg = db.Column(db.Integer, db.ForeignKey("channel.id"), nullable=False)

class Videos(db.Model):
    __tablename__ = 'videos'
    id = db.Column(db.Integer, primary_key=True)
    source = db.Column(db.String(150), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    sizeVideo = db.Column(db.Integer, nullable=False)
    videoCateg = relationship("Categories")
    channelVideo = db.Column(db.Integer, db.ForeignKey("channel.id"), nullable=False)

    def __repr__(self):
        return '<Videos %r>' % (self.title)

    def serialize(self):
        return {
            "id": self.id,
            "source": self.source,
            "title": self.title,
            "sizeVideo": self.sizeVideo,
            "channelVideo": self.channelVideo,
        }
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_by_id(cls, id):
        user = cls.query.get(id)
        return user

    @classmethod
    def get_all(cls):
        user = cls.query.all()
        return user

    @classmethod
    def delete(self):
        user = User.query.get(self.id)
        db.session.delete(user)
        db.session.commit()
        return self

class Categories(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    categories = db.Column(db.String(50), nullable=False)
    videos = db.Column(db.Integer, db.ForeignKey("videos.id"), nullable=False)

class Following(db.Model):
    __tablename__ = 'following'
    id = db.Column(db.Integer, primary_key=True)
    followUser = db.Column(db.String(50), nullable=False)
    userFollowing = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return '<Following %r>' % (self.followUser)

    def serialize(self):
        return {
            "id": self.id,
            "followUser": self.followUser,
            "userFollowing": self.userFollowing
        }
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_by_id(cls, id):
        user = cls.query.get(id)
        return user

    @classmethod
    def get_all(cls):
        user = cls.query.all()
        return user

    @classmethod
    def delete(self):
        user = User.query.get(self.id)
        db.session.delete(user)
        db.session.commit()
        return self


class Messages(db.Model):
    __tablename__ = 'messages'
    id = db.Column(db.Integer, primary_key=True)
    userOrig = db.Column(db.String(40), nullable=False)
    messages = db.Column(db.String(500), nullable=False)
    userMessages = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return '<Messages %r>' % (self.messages)

    def serialize(self):
        return {
            "id": self.id,
            "userOrig": self.userOrig,
            "messages": self.messages,
            "userMessages": self.userMessages
        }
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_by_id(cls, id):
        msg = cls.query.get(id)
        return msg

    @classmethod
    def get_all(cls):
        msgs = cls.query.all()
        return msgs

    @classmethod
    def delete(self):
        msg = Messages.query.get(self.id)
        db.session.delete(msg)
        db.session.commit()
        return self

class Config(db.Model):
    __tablename__ = 'config'
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.ARRAY(db.String), nullable=False)
    channelConfig = db.Column(db.Integer, db.ForeignKey("channel.id"), nullable=False)

class Img(db.Model):
    __tablename__ = 'img'
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.Text, nullable=False)
    imgUser = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return '<Img %r>' % (self.img)

    def serialize(self):
        return {
            "id": self.id,
            "img": self.img,
            "imgUser": self.imgUser
        }
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_by_id(cls, id):
        img = cls.query.get(id)
        return img

    @classmethod
    def get_all(cls):
        img = cls.query.all()
        return img

    @classmethod
    def delete(self):
        img = Img.query.get(self.id)
        db.session.delete(img)
        db.session.commit()
        return self

class Banner(db.Model):
    __tablename__ = 'banner'
    id = db.Column(db.Integer, primary_key=True)
    banner = db.Column(db.Text, nullable=False)
    banenrUser = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return '<Banner %r>' % (self.banner)

    def serialize(self):
        return {
            "id": self.id,
            "banner": self.banner,
            "banenrUser": self.banenrUser
        }
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_by_id(cls, id):
        banner = cls.query.get(id)
        return banner

    @classmethod
    def get_all(cls):
        banner = cls.query.all()
        return banner

    @classmethod
    def delete(self):
        banner = Banner.query.get(self.id)
        db.session.delete(banner)
        db.session.commit()
        return self

class Movie(db.Model):
    __tablename__ = 'movie'
    id = db.Column(db.Integer, primary_key=True)
    movie = db.Column(db.Text, nullable=False)
    title = db.Column(db.Text, nullable=True)
    catMov = db.Column(db.Text, nullable=True)
    sizeVideo = db.Column(db.Integer, nullable=True)
    movieUser = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return '<Movie %r>' % (self.movie)

    def serialize(self):
        return {
            "id": self.id,
            "movie": self.movie,
            "title": self.title,
            "catMov": self.catMov,
            "sizeVideo": self.sizeVideo,
            "movieUser": self.movieUser
        }
    
    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    @classmethod
    def get_by_id(cls, id):
        movie = cls.query.get(id)
        return movie

    @classmethod
    def get_all(cls):
        movie = cls.query.all()
        return movie

    @classmethod
    def delete(self):
        movie = Movie.query.get(self.id)
        db.session.delete(movie)
        db.session.commit()
        return self