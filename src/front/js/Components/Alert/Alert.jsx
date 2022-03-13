import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../Buttons/Primary/PrimaryButton.jsx";
import { Context } from "../../store/appContext.js";

import { faSadTear, faSmile } from "@fortawesome/free-solid-svg-icons";

import "./Alert.css";

const Aleert = () => {
  const { actions, store } = useContext(Context);
  const [show, setShow] = useState(true);
  const handleClickInputOut = (ev) => {
    actions.logOut();
    if (show) setShow(false);
  };
  const handleClickInput = (ev) => {
    if (show) setShow(false);
  };

  return (
    <>
      <div className={show ? "divAlert" : "novisi"}>
        <div className="alert">
          <div className="alertLetter">
            Are you&nbsp;<span className="spanLetter">sure babe?</span>
          </div>
          <div className="alertButton">
            <NavLink exact to={"/"} className="alertNo">
              <PrimaryButton
                handleClick={handleClickInputOut}
                placeholder={"Yes... "}
                changePlacehold={"Yes... "}
                face={faSadTear}
              />
            </NavLink>
            <NavLink exact to={"/"} className="alertNo">
              <PrimaryButton
                handleClick={handleClickInput}
                placeholder={"Never "}
                changePlacehold={"Never "}
                face={faSmile}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aleert;
