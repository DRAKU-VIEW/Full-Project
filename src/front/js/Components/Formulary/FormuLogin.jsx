import React, { useState, useContext } from "react";
import logoForm from "../../resources/img/Haku.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faClose } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext.js";

import "./Formu.css";
const FormuLogin = (props) => {
  const { actions, store } = useContext(Context);
  const [username, setUsername] = useState("");
  const [passsword, setPasssword] = useState("");
  const [showe, setShowe] = useState(true);
  const [shower, setShower] = useState(true);
  const handleShowe = () => {
    if (showe === true) {
      setShowe(false);
      setShower(false);
    } else {
      setShowe(true);
      setShower(true);
    }
  };
  const handleClickSignUp = () => {
    props.handleClickSignUp();
  };
  const close = () => {
    props.close();
  };
  const onSubmitlog = (ev) => {
    ev.preventDefault();
    actions.logIN({
      username: `${username}`,
      password_hash: `${passsword}`,
    });
    props.onSubmitlog();
  };
  const onChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };
  const onChangePass = (e) => {
    const value = e.target.value;
    setPasssword(value);
  };
  return (
    <>
      <div id="container">
        <div>
          <h1 className="h1Form d-flex justify-content-center"> Be a Draku</h1>
          <div className="d-flex justify-content-end pe-3">
            <button className="iconClose" onClick={close}>
              <FontAwesomeIcon className="iconClose" icon={faClose} />
            </button>
          </div>
        </div>
        <button onClick={handleClickSignUp} className="buttSign">
          Sign up
        </button>
        <div className=" mt-4 d-flex justify-content-center">
          <div>
            <img src={logoForm} width="80" alt="" />
          </div>
        </div>
        <form onSubmit={onSubmitlog} className="formSign" id="contact_form">
          <div className="name">
            <label htmlFor="name"></label>
            <input
              onChange={onChange}
              className="inputForm changes"
              type="text"
              placeholder="UserName"
              name="name"
              id="name_input"
              required
            />
          </div>
          <div className="password">
            <label htmlFor="password"></label>
            <input
              onChange={onChangePass}
              className="inputForm changes passInf"
              type={showe ? "password" : "none"}
              placeholder="Password"
              name="password"
              id="password_input"
              required
            />
            <button type="button" className="eyeSign" onClick={handleShowe}>
              <FontAwesomeIcon
                className="iconSign"
                icon={showe ? faEyeSlash : faEye}
              />
            </button>
          </div>
          <div className="submit">
            <input
              className="inputForm changes"
              type="submit"
              value="Log In"
              id="form_button"
            />
          </div>
        </form>
      </div>
    </>
  );
};

FormuLogin.propTypes = {
  handleClickSignUp: PropTypes.func,
  onSubmitlog: PropTypes.func,
  close: PropTypes.func,
};

export default FormuLogin;
