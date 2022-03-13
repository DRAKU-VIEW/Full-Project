import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../../store/appContext.js";

import "./TableItem.css";

const TableItem = (props) => {
  const { actions, store } = useContext(Context);

  // const deleteMsg = () => {
  //   actions.deleteMessages(props.ids);
  // };

  return (
    <>
      <tr key={props.ix}>
        <td>{props.valueU}</td>
        <td>{props.valueM}</td>
        <td className="d-flex justify-content-center buttontrash">
          <button className="trash" onClick={deleteMsg}>
            <FontAwesomeIcon className="iconTrashh" icon={faTrash} />
          </button>{" "}
        </td>
      </tr>
    </>
  );
};

TableItem.propTypes = {
  ix: PropTypes.number,
  valueU: PropTypes.string,
  valueM: PropTypes.string,
  deleteMsg: PropTypes.func,
};

export default TableItem;
