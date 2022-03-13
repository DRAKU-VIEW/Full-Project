import React, { useState, useContext, useEffect } from "react";
import Quaternary from "../../Components/Inputs/Quaternary/Quaternary.jsx";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton.jsx";
import TertiaryInput from "../../Components/Inputs/Tertiary/TertiaryInput.jsx";
import { Context } from "../../store/appContext.js";

import "./MessagesView.css";

const MessagesOutbox = () => {
  const { actions, store } = useContext(Context);
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  // const content = store.messagesss;
  // console.log(content);

  const handleClick = () => {
    changeName(username);
    changeMsg(msg);
    console.log(msg);
    console.log(username);
    
    actions.postMessages({
      messages: `${msg}`,
      userMessages: `${username}`,
    });
  };

  const changeName = (e) => {
    console.log(e);
    setUsername(e);
  };

  const changeMsg = (e) => {
    setMsg(e);
  };

  return (
    <div className="colorBack">
      <div className="ms-4 mt-4">
        <div className="d-flex align-items-center mb-3">
          <div className="destiny mx-2">To:</div>
          <div className="">
            <TertiaryInput
              typeInput={"none"}
              check={true}
              changeName={changeName}
            />
          </div>
        </div>
        <div className="d-flex justify-content-start mb-2">
          <Quaternary valueText={""} changeMsg={changeMsg} />
        </div>
        <div className="d-flex justify-content-end me-3">
          <PrimaryButton
            placeholder={"Send"}
            changePlacehold={"Sent"}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default MessagesOutbox;
