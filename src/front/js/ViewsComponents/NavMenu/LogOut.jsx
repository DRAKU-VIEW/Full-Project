import React from "react";
import Menu from "../../Components/MenuLink/Menu.jsx";
import Header from "../Header/Header.jsx";
import Aleert from "../../Components/Alert/Alert.jsx";

import { arrModels } from "../../Components/MenuLink/Model.js";

import "./LogOut.css";

const LogOut = () => {
  return (
    <div className="colorBack">
      <Header />
      <Menu models={arrModels} />
      <div className="ml150">
        <div className="vertical">
          <Aleert />
        </div>
      </div>
    </div>
  );
};

export default LogOut;
