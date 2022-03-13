import React, { useState, useContext } from "react";
import logoForm from "../../resources/img/Haku.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faClose } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext.js";

import "./Formu.css";
const FormuVideo = (props) => {
  const { actions, store } = useContext(Context);
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const close = () => {
    props.close();
  };
  const onSubmitVideo = (ev) => {
    ev.preventDefault();
    actions.uploadVideo({
      title: `${title}`,
      source: `${source}`,
    });
    props.onSubmitVideo();
  };
  const onChangeTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };
  const onChangeSource = (e) => {
    const value = e.target.value;
    setSource(value);
  };
  const handleChange = (event) => {
    setCateg(event.target.value);
  };
  const [movieF, setMovieF] = useState(null);
  const [categ, setCateg] = useState("");
  const [sise, setSise] = useState(null);
  const [flama, setFlama] = useState(false);
  const uploadMovie = (evt) => {
    let myToken = localStorage.getItem("token");
    evt.preventDefault();
    console.log("paso");

    console.log("This are the files", movieF);
    let body = new FormData();
    body.append("movieFile", movieF[0]);
    body.append("title", title);
    body.append("catMov", categ);
    body.append("sizeVideo", sise);

    const options = {
      body,
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${myToken}`,
      },
    };
    fetch(
      "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/movie",
      options
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Success!!!!", data);
        setFlama(true);
      })
      .catch((erros) => console.error("ERRORRRRRR!!!", erros));
  };
  if (flama) {
    actions.putMov({
      title: `${title}`,
      catMov: `${categ}`,
      sizeVideo: `${sise}`,
    });
  }
  return (
    <>
      <div id="container">
        <div>
          <h1 className="h1Form d-flex justify-content-center"> New Video</h1>
          <div className="d-flex justify-content-end pe-3">
            <button className="iconClose" onClick={close}>
              <FontAwesomeIcon className="iconClose" icon={faClose} />
            </button>
          </div>
        </div>
        <form onSubmit={uploadMovie} className="formSign" id="contact_form">
          <div className="title">
            <label htmlFor="title"></label>
            <input
              onChange={onChangeTitle}
              className="inputForm changes"
              type="text"
              placeholder="Title"
              name="title"
              id="title_input"
              required
            />
          </div>
          <div>
            <input
              className="inputForm source mb-4"
              type="file"
              onChange={(e) => setMovieF(e.target.files)}
            />
          </div>
          <div className="subject mb-4">
            <label htmlFor="subject"></label>
            <select
              onChange={handleChange}
              placeholder="Choose category"
              name="subject"
              id="subject_input"
              required
              value={categ}
            >
              <option hidden>Choose category</option>
              <option>Games</option>
              <option>Chatting</option>
              <option>Music</option>
              <option>Learning</option>
              <option>Street</option>
            </select>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <div>
              <input
                onClick={() => {
                  setSise(200);
                }}
                type="radio"
                id="movil"
                name="tipoVideo"
                value="Movil"
              />
              <label htmlFor="movil">Movil</label>
            </div>
            <div>
              <input
                onClick={() => {
                  setSise(300);
                }}
                type="radio"
                id="pc"
                name="tipoVideo"
                value="PC"
              />
              <label htmlFor="pc">PC</label>
            </div>
          </div>
          <div className="submit">
            <input
              className="inputForm changes"
              type="submit"
              value="UpLoad"
              id="form_button"
            />
          </div>
        </form>
      </div>
    </>
  );
};

FormuVideo.propTypes = {
  onSubmitlog: PropTypes.func,
  close: PropTypes.func,
};

export default FormuVideo;
