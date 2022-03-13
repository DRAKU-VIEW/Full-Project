import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

import logo from "../../resources/img/Haku.png";

import PrimaryInput from "../../Components/Inputs/Primary/PrimaryInput.jsx";
import ButtonLetter from "../../Components/Buttons/Letters/ButtonLetter.jsx";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton.jsx";
import DropdownProfile from "../../Components/Dropdown/DropdownProfile.jsx";
import Formu from "../../Components/Formulary/Formu.jsx";
import FormuLogin from "../../Components/Formulary/FormuLogin.jsx";
import { Context } from "../../store/appContext.js";
import FormuVideo from "../../Components/Formulary/FormuVideo.jsx";

const Header = () => {
  const { actions, store } = useContext(Context);

  const [disSignup, setDisSignup] = useState(true);
  const [disLogin, setDisLogin] = useState(true);
  const [plus, setPlus] = useState(true);

  const handleSubmitPrimary = (ev) => {
    ev.preventDefault();
    console.log("Boton pulsado");
  };
  const handleSearchPrimary = (e) => {
    actions.followUSER({
      followUser: `${e}`,
    });
  };
  const handleClikPrimary = (e) => {
    console.log("Boton pulsado");
  };

  const handClickPlus = () => {
    setPlus(false);
  };
  const handleClickLogin = () => {
    setDisLogin(false);
  };
  const close = () => {
    setDisLogin(true);
    setPlus(true);
    setDisSignup(true);
  };
  const handleClickSignUp = () => {
    if (!disSignup) {
      setDisSignup(true);
      setDisLogin(false);
    }
    if (!disLogin) {
      setDisSignup(false);
      setDisLogin(true);
    }
  };
  const onSubmitlog = () => {
    console.log("logueado");
  };
  const onSubmitsign = () => {
    console.log("sign");
  };
  const onSubmitVideo = () => {
    console.log("plus");
    setPlus(true);
  };
  const onChangeSearch = (e) => {
    const value = e.target.value;
    console.log(value);
  };
  const handleClickFollow = () => {
    actions.getFOLLOW();
    console.log("hola");
  };

  useEffect(() => {
    actions.getImg();
    actions.getBan();
    actions.getMov();
    actions.getUSER();
    actions.getChannel();
  }, [store.logUser]);

  return (
    <>
      <div className="headere">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-start">
            <NavLink exact to={"/"} className="logo">
              <img
                src={logo}
                alt="DRAKUsLogo"
                width={40}
                className="DRAKUsLogo mx-2 mt-1"
              />
            </NavLink>
            <form
              onSubmit={handleSubmitPrimary}
              className="align-self-center formu mx-2 justify-content-end"
            >
              <PrimaryInput
                placeholder={"Search..."}
                onChangeSearch={onChangeSearch}
                handleClick={handleClikPrimary}
                handleSearch={handleSearchPrimary}
                search={faSearch}
              />
            </form>
          </div>
          <div className="d-flex align-self-center justify-content-end">
            <div
              style={{ display: store.logUser ? "block" : "none" }}
              className="justify-content-end category align-self-center mx-3"
            >
              <button onClick={handClickPlus} className="buttonplus">
                <FontAwesomeIcon
                  className="iconplus align-self-center "
                  icon={faPlus}
                />
              </button>
            </div>
            <div className="justify-content-start category align-self-center mx-3">
              <NavLink className={"navClas"} exact to={`/Trends`}>
                <ButtonLetter
                  placeholder={"Categories"}
                  changePlacehold={"Categories"}
                />
              </NavLink>
            </div>
            <div
              style={{ display: store.logUser ? "block" : "none" }}
              className="justify-content-end category align-self-center mx-3"
            >
              <NavLink className={"navClas"} exact to={`/Following`}>
                <ButtonLetter
                  handleClick={handleClickFollow}
                  placeholder={"Following"}
                  changePlacehold={"Following"}
                  goTo={"#"}
                />
              </NavLink>
            </div>
            <div
              className={`${
                !store.logUser ? "d-block" : "d-none"
              } signLogin justify-content-end align-self-center me-3`}
            >
              <PrimaryButton
                placeholder={"Sign In/Login"}
                changePlacehold={"Sign In/Login"}
                handleClick={handleClickLogin}
              />
            </div>
            <div style={{ display: store.logUser ? "block" : "none" }}>
              <DropdownProfile />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${store.logSignUp ? "d-none" : "d-block"} ${
          disSignup ? "d-none" : "d-block"
        } posi`}
      >
        <Formu
          close={close}
          handleClickSignUp={handleClickSignUp}
          onSubmitsign={onSubmitsign}
        />
      </div>
      <div
        className={`${store.logUser ? "d-none" : "d-block"} ${
          disLogin ? "d-none" : "d-block"
        } posi`}
      >
        <FormuLogin
          close={close}
          handleClickSignUp={handleClickSignUp}
          onSubmitlog={onSubmitlog}
        />
      </div>
      <div className={`${plus ? "d-none" : "d-block"} posi`}>
        <FormuVideo close={close} onSubmitVideo={onSubmitVideo} />
      </div>
    </>
  );
};

export default Header;
