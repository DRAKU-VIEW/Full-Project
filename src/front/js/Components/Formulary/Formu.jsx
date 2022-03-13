import React, { useState, useContext } from "react";
import logoForm from "../../resources/img/Haku.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faClose } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext.js";

import "./Formu.css";

const Formu = (props) => {
  const [username, setUsername] = useState("");
  const [passsword, setPasssword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { actions, store } = useContext(Context);
  const [showe, setShowe] = useState(true);
  const handleShowe = () => {
    if (showe === true) setShowe(false);
    else setShowe(true);
  };
  const handleClickSignUp = () => {
    props.handleClickSignUp();
  };
  const close = () => {
    props.close();
  };
  const onSubmitsign = (ev) => {
    ev.preventDefault();
    actions.signUP({
      username: `${username}`,
      password_hash: `${passsword}`,
      email: `${email}`,
      phone: `${phone}`,
    });
    props.onSubmitsign();
  };
  const onChange = (e) => {
    const value = e.target.value;
    setUsername(value);
  };
  const onChangePass = (e) => {
    const value = e.target.value;
    setPasssword(value);
  };
  const onChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const onChangePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
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
        <div className="text-start pe-3">
          <button onClick={handleClickSignUp} className="buttSign">
            Login
          </button>
        </div>
        <div className=" mt-4 d-flex justify-content-center">
          <div>
            <img src={logoForm} width="80" alt="" />
          </div>
        </div>
        <form onSubmit={onSubmitsign} className="formSign" id="contact_form">
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
            <button className="eyeSign" onClick={handleShowe}>
              <FontAwesomeIcon
                className="iconSign"
                icon={showe ? faEyeSlash : faEye}
              />
            </button>
          </div>
          <div className="email">
            <label htmlFor="email"></label>
            <input
              onChange={onChangeEmail}
              className="inputForm changes"
              type="email"
              placeholder="E-mail"
              name="email"
              id="email_input"
            />
          </div>
          <div className="telephone">
            <label htmlFor="name"></label>
            <input
              onChange={onChangePhone}
              className="inputForm changes"
              type="number"
              placeholder="Phone"
              name="telephone"
              id="telephone_input"
              required
            />
          </div>
          <div className="submit">
            <input
              className="inputForm changes"
              type="submit"
              value="Sign Up"
              id="form_button"
            />
          </div>
        </form>
      </div>
    </>
  );
};

Formu.propTypes = {
  handleClickSignUp: PropTypes.func,
  close: PropTypes.func,
};

export default Formu;
