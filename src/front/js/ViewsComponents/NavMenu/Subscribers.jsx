import React, { useState } from "react";
import Menu from "../../Components/MenuLink/Menu.jsx";
import Header from "../Header/Header.jsx";
import TertiaryInput from "../../Components/Inputs/Tertiary/TertiaryInput.jsx";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton.jsx";
import Quaternary from "../../Components/Inputs/Quaternary/Quaternary.jsx";

import { arrModels } from "../../Components/MenuLink/Model.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/fontawesome-free-regular";

import "./Subscribers.css";

const Subscribers = () => {
  const [info1, setInfo1] = useState(false);
  const [info2, setInfo2] = useState(false);
  const [info3, setInfo3] = useState(false);
  const handleClikPrimary = () => {
    console.log("Boton pulsado");
  };
  return (
    <div>
      <Header />
      <Menu models={arrModels} />
      <div className="ml150">
        <div className="ms-5 mt-5">
          {/* <div className="d-flex mt-4 align-items-baseline">
            <h5 className="me-4">
              Moderator:
              <FontAwesomeIcon
                icon={faQuestionCircle}
                onMouseOver={() => setInfo1(true)}
                onMouseLeave={() => setInfo1(false)}
              />
            </h5>
            <TertiaryInput inputSetting={true} check={true} typeInput={true} />
          </div>
          <h6 className={info1 ? "none" : "hide"}>
            Choose a moderator who can delete messages in your chat
          </h6> */}
          <div className="d-flex mt-4 align-items-baseline">
            <h5 className="me-4">
              Block:
              <FontAwesomeIcon
                icon={faQuestionCircle}
                onMouseOver={() => setInfo2(true)}
                onMouseLeave={() => setInfo2(false)}
              />
            </h5>
            <TertiaryInput inputSetting={true} check={true} typeInput={true} />
          </div>
          <h6 className={info2 ? "none" : "hide"}>
            Block a specified user from your channel
          </h6>
          <div className="d-flex mt-4 align-items-baseline">
            <h5 className="me-4">
              Report:
              <FontAwesomeIcon
                icon={faQuestionCircle}
                onMouseOver={() => setInfo3(true)}
                onMouseLeave={() => setInfo3(false)}
              />
            </h5>
            <TertiaryInput inputSetting={true} check={true} typeInput={true} />
          </div>
          <h6 className={info3 ? "none" : "hide"}>
            Choose a user to report it to the DRAKU managers
          </h6>
          <div className="d-flex mt-4">
              <h6>Reasons:</h6>
              <Quaternary valueText={" "} />
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

export default Subscribers;
