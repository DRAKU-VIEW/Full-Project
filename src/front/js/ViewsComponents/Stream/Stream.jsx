import React from "react";
import TertiaryInput from "../../Components/Inputs/Tertiary/TertiaryInput.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/fontawesome-free-regular";

import live from "../../resources/img/live.png";
import profile from "../../resources/img/buga.png";

import "./Stream.css";

const Stream = () => {
  const handleSearchTertiary = () => {
    console.log("Boton pulsado");
  };
  return (
    <div>
      <div className="colorBack">
        <div className="sidebar-rigth d-flex justify-content-between">
          <div className="text-center colorSecondary font-weight-bold">
            <img
              className="me-2"
              width={25}
              height={15}
              src={live}
              alt="live logo "
            />
            Stream Chat
          </div>
          <div className="pabajo">
            <TertiaryInput
              handleShow={handleSearchTertiary}
              check={false}
              typeInput={true}
            />
          </div>
        </div>
        <div className="video">
          <iframe
            className="ivdieo"
            src="https://www.youtube.com/embed/ZG895az7OY4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="ms-3 mt-3 d-flex justify-content-between color-title">
          <div className="d-flex">
            <img
              className="profile rounded-circle"
              width={60}
              height={60}
              src={profile}
              alt="user profile"
            />
            <div className="ms-2 align-self-center">Bugafantastic</div>
          </div>
          <div className="align-self-start">
            <div>PACK OPENING FIFA 22</div>
            <div>FIFA 22 English Sports</div>
          </div>
          <div className="d-flex align-self-center me-3">
            <button className="buttonHeart">
              <div className="iconHeart d-flex justify-content-center">
                <FontAwesomeIcon
                  className="iconHear align-self-center "
                  icon={faHeart}
                />
              </div>
            </button>
            <div className="text-center text-color align-self-center">
              5035 viewes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;
