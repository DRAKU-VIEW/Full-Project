import React, { useState } from "react";
import { arrModels } from "../../Components/MenuLink/Model.js";
import Menu from "../../Components/MenuLink/Menu.jsx";
import Header from "../Header/Header.jsx";
import HomeProfile from "../IndexChannel/HomeProfile.jsx";
import CommunityProfile from "../IndexChannel/CommunityProfile.jsx";
import CommunityConfiguration from "../IndexChannel/CommunityConfiguration.jsx";
import LinkButtons from "../../Components/LinkButtons/LinkButtons.jsx";
import { arrModelRadios } from "../../Components/LinkButtons/ModelRadios.js";

const Channel = () => {
  const [checkButton1, setCheckButton1] = useState(true);
  const [checkButton2, setCheckButton2] = useState(false);
  const [checkButton3, setCheckButton3] = useState(false);
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  const handleClick = (e) => {
    switch (e) {
      case 1:
        setCheckButton1(true);
        setCheckButton2(false);
        setCheckButton3(false);
        setSelected1(true);
        setSelected2(false);
        setSelected3(false);
        break;
      case 2:
        setCheckButton1(false);
        setCheckButton2(true);
        setCheckButton3(false);
        setSelected1(false);
        setSelected2(true);
        setSelected3(false);
        break;
      case 3:
        setCheckButton1(false);
        setCheckButton2(false);
        setCheckButton3(true);
        setSelected1(false);
        setSelected2(false);
        setSelected3(true);
        break;
    }
  };

  return (
    <div>
      <Header />
      <Menu models={arrModels} />
      <div className="ml150 color-title">
        <div className="colorBack">
          <div className="ps-4 pt-4">
            <LinkButtons
              butLinking={handleClick}
              models={arrModelRadios}
              select={[selected1, selected2, selected3]}
            />
            <div className={checkButton1 ? "d-block" : "d-none"}>
              <HomeProfile />
            </div>
            <div className={checkButton2 ? "d-block" : "d-none"}>
              <CommunityProfile />
            </div>
            <div className={checkButton3 ? "d-block" : "d-none"}>
              <CommunityConfiguration />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
