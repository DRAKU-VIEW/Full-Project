import React, { useState } from "react";

import Header from "../Header/Header.jsx";
import "./InfoUser.css";
import "../../Components/Dropdown/DropdownProfile.css";
import profile from "../../resources/img/buga.png";
import LinkButtons from "../../Components/LinkButtons/LinkButtons.jsx";
import { ModelUser } from "./ModelUser.js";
import TertiaryButton from "../../Components/Buttons/Tertiary/TertiaryButton.jsx";
import BodyGrid from "../Grid/BodyGrid.jsx";

import { faHeart } from "@fortawesome/fontawesome-free-regular";
import banner from "../../resources/img/kimetsu.jpg";

const InfoUser = () => {
  const [checkUserButton1, setUserCheckButton1] = useState(true);
  const [checkUserButton2, setUserCheckButton2] = useState(false);
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(false);

  const handleClick = (e) => {
    switch (e) {
      case 1:
        setUserCheckButton1(true);
        setUserCheckButton2(false);
        setSelected1(true);
        setSelected2(false);
        break;
      case 2:
        setUserCheckButton1(false);
        setUserCheckButton2(true);
        setSelected1(false);
        setSelected2(true);
        break;
    }
  };
  return (
    <>
      <Header />
      <div className="colorBack">
        <div className="">
          <img className="banner" src={banner} />
        </div>
        <div className="d-flex description ms-3 mt-3">
          <img
            className="profile rounded-circle align-self-center"
            width={60}
            height={60}
            src={profile}
            alt="user profile"
          />
          <div className="color-title align-self-center mx-2">
            Javilito_Molon
          </div>
        </div>
        <div className="d-flex align-self-center">
          <div className="mx-4 ms-5 align-self-center">
            <LinkButtons
              butLinking={handleClick}
              models={ModelUser}
              select={[selected1, selected2]}
            />
          </div>
          <div className="align-self-center">
            <TertiaryButton
              placeholder={"Follow"}
              changePlacehold={"Following"}
              symbol={faHeart}
            />
          </div>
        </div>
        <div className={checkUserButton1 ? "d-block" : "d-none"}>
          <div className="mx-5 mt-3 mb-2 biography">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className={checkUserButton2 ? "d-block" : "d-none"}>
          <div className="mx-5 ">
            <div>
              <h5 className="color-title d-flex justify-content-center mt-3">
                Recent Broadcast
              </h5>
            </div>
            <div>
              <BodyGrid />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoUser;
