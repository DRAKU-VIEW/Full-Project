import React, { useState } from "react";
import TertiaryInput from "../../Components/Inputs/Tertiary/TertiaryInput.jsx";
import SecondaryInput from "../../Components/Inputs/Secondary/SecondaryInput.jsx";
import twitter from "../../resources/img/twitter.png";
import instagram from "../../resources/img/instagram.png";
import facebook from "../../resources/img/facebook.png";
import reddit from "../../resources/img/reddit.png";
import blogger from "../../resources/img/blogger.png";

import "./HomeProfile.css";
import "./CommunityProfile.css";
import "./CommunityConfiguration.css";

const CommunityConfiguration = () => {
  const [textLanguage, setTextLanguage] = useState("720 60 fps");
  const [textLanguage2, setTextLanguage2] = useState("1080 60 fps");
  const [checkedAdult, setCheckedAdult] = useState(false);
  const [checkedVoD, setCheckedVoD] = useState(false);

  const handleClikSecondary = () => {
    if (textLanguage2 === "1080 60 fps") {
      setTextLanguage("1080 60 fps");
      setTextLanguage2("720 60 fps");
    } else if (textLanguage2 === "720 60 fps") {
      setTextLanguage("720 60 fps");
      setTextLanguage2("1080 60 fps");
    }
  };

  const handleClick = () => {
    setCheckedAdult(!checkedAdult);
  };

  const handleClickVideo = () => {
    setCheckedVoD(!checkedVoD);
  };

  return (
    <div className="text-config mt-4">
      <div className="d-flex align-items-center mb-4">
        <div className="mx-2">Transmission Quality:</div>
        <div>
          <SecondaryInput
            principalText={textLanguage}
            secondaryText={textLanguage2}
            handleClick={handleClikSecondary}
          />
        </div>
      </div>
      <div className="d-flex align-items-center mb-4">
        <div className="mx-2"> Adult Content:</div>
        <div>
          <input
            type="radio"
            value="Adult content:"
            name="adultContent"
            onClick={handleClick}
            checked={checkedAdult}
          />
        </div>
      </div>
      <div className="d-flex align-items-center mb-4">
        <div className="mx-2"> Save VoD Videos:</div>
        <div>
          <input
            type="radio"
            value="Save VoD Videos"
            name="saveVoDContent"
            onClick={handleClickVideo}
            checked={checkedVoD}
          />
        </div>
      </div>
      <div className=" align-items-center mb-4">
        <div className="mx-2 mb-1">Social Media:</div>
        <div className="d-flex">
          <button className="SSMM me-1">
            <img src={twitter} className="socialMedia" alt="LogoTwitter"></img>
          </button>
          <button className="SSMM mx-1">
            <img
              src={instagram}
              className="socialMedia"
              alt="LogoInstagram"
            ></img>
          </button>

          <button className="SSMM mx-1">
            <img
              src={facebook}
              className="socialMedia"
              alt="LogoFacebook"
            ></img>
          </button>
          <button className="SSMM mx-1">
            <img src={reddit} className="socialMedia" alt="LogoReddit"></img>
          </button>
          <button className="SSMM mx-1">
            <img src={blogger} className="socialMedia" alt="LogoBlogger"></img>
          </button>
        </div>
        <div className="d-flex mt-2 mx-2 align-items-center">
          <div className="mx-2">URL:</div>
          <TertiaryInput typeInput="none" />
        </div>
      </div>
    </div>
  );
};

export default CommunityConfiguration;
