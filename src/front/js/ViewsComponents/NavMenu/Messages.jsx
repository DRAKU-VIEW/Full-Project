import React, { useState } from "react";
import Menu from "../../Components/MenuLink/Menu.jsx";
import Header from "../Header/Header.jsx";
import { arrModels } from "../../Components/MenuLink/Model.js";
import MessagesInbox from "../Messages/MessagesInbox.jsx";
import MessagesOutbox from "../Messages/MessageOutbox.jsx";
import LinkButtons from "../../Components/LinkButtons/LinkButtons.jsx";
import { arrMessageModelIndex } from "../Messages/ModelMessages.js";

import "./Messages.css";

const Messages = () => {
  const [checkButtonMessage1, setButtonMessage1] = useState(true);
  const [checkButtonMessage2, setButtonMessage2] = useState(false);
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(false);

  const handleClick = (e) => {
    switch (e) {
      case 1:
        setButtonMessage1(true);
        setButtonMessage2(false);
        setSelected1(true);
        setSelected2(false);
        break;
      case 2:
        setButtonMessage1(false);
        setButtonMessage2(true);
        setSelected1(false);
        setSelected2(true);
        break;
    }
  };
  return (
    <div>
      <Header />
      <Menu models={arrModels} />
      <div className="ml150">
        <div className="colorBack">
          <div className="ps-4 pt-4">
            <LinkButtons
              butLinking={handleClick}
              models={arrMessageModelIndex}
              select={[selected1, selected2]}
            />
            <div className={`${checkButtonMessage1 ? "d-block" : "d-none"} wMessage`}>
              <MessagesInbox />
            </div>
            <div className={checkButtonMessage2 ? "d-block" : "d-none"}>
              <MessagesOutbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
