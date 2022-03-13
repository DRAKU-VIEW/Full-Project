import React, { useState, useContext } from "react";
import Menu from "../../Components/MenuLink/Menu.jsx";
import Header from "../Header/Header.jsx";
import TertiaryInput from "../../Components/Inputs/Tertiary/TertiaryInput.jsx";
import SecondaryInput from "../../Components/Inputs/Secondary/SecondaryInput.jsx";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton.jsx";
import { Context } from "../../store/appContext.js";

import "./Settings.css";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { arrModels } from "../../Components/MenuLink/Model.js";

const Settings = () => {
  const { actions, store } = useContext(Context);
  const [textLanguage, setTextLanguage] = useState("English");
  const [textLanguage2, setTextLanguage2] = useState("Spanish");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const handleClikPrimary = () => {
    actions.putConf({
      password_hash: `${pass}`,
      email: `${mail}`,
    });
  };
  const handleSearchTertiary = () => {
    console.log("Boton pulsado");
  };
  const handleClikSecondary = () => {
    if (textLanguage2 === "Spanish") {
      setTextLanguage("Spanish");
      setTextLanguage2("English");
    } else if (textLanguage2 === "English") {
      setTextLanguage("English");
      setTextLanguage2("Spanish");
    }
  };
  const changePassword = (e) => {
    setPass(e);
  };
  const changeEmail = (e) => {
    setMail(e);
  };

  return (
    <div className="colorBack">
      <Header />
      <Menu models={arrModels} />
      <div className="ml150">
        <div className="ms-4 mt-5">
          <div className="d-flex mt-4 align-items-baseline">
            <h5 className="color-title me-4">Change PassWord:</h5>
            <TertiaryInput
              changeName={changePassword}
              inputSetting={true}
              handleShow={handleSearchTertiary}
              check={true}
              typeInput={"password"}
              eye={faEye}
              noEye={faEyeSlash}
            />
          </div>
        </div>
        <div className="ms-4 mt-5">
          <div className="d-flex mt-4 align-items-baseline">
            <h5 className="color-title me-4">Change mail:</h5>
            <TertiaryInput
              changeName={changeEmail}
              inputSetting={true}
              handleShow={handleSearchTertiary}
              check={true}
              typeInput={true}
            />
          </div>
        </div>
        <div className="ms-4 mt-5">
          <div className="d-flex mt-4 align-items-baseline">
            <h5 className="color-title me-4">Language:</h5>
            <SecondaryInput
              principalText={textLanguage}
              secondaryText={textLanguage2}
              handleClick={handleClikSecondary}
            />
          </div>
        </div>
        <div className="d-flex justify-content-end me-4 mt-3">
          <PrimaryButton
            handleClick={handleClikPrimary}
            placeholder={"Save Changes"}
            changePlacehold={"Saved"}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
