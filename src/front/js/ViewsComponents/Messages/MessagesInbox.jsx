import React, { useState, useContext, useEffect } from "react";
import TableMessage from "../../Components/Table/TableMessage.jsx";
import { Context } from "../../store/appContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

const MessagesInbox = () => {
  const { actions, store } = useContext(Context);
  const getMsg = () => {
    actions.getMessages();
  };

  useEffect(() => {
    getMsg();
  }, [store.logUser]);

  return (
    <>
      {store.messagesss.length > 0 ? (
        <div className="colorBack">
          <div className="ms-4 mt-4">
            <TableMessage
              col1={"User"}
              col2={"Message"}
              content={store.messagesss}
            />
          </div>
        </div>
      ) : (
        <h2 className="text-center colorSecondary">
          Your Inbox is empty
          <FontAwesomeIcon className="ms-2" icon={faSmile} />
        </h2>
      )}
    </>
  );
};

export default MessagesInbox;
