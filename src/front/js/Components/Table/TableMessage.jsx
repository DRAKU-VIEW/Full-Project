import React, { useContext } from "react";
import PropTypes from "prop-types";

import TableItem from "./TableItem/TableItem.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TableMessage.css";
import { Spinner } from "react-bootstrap";
import { Context } from "../../store/appContext.js";


const TableMessage = (props) => {
  console.log(props.content);
  const { actions, store } = useContext(Context);

  return (
    <>
      <div className="message table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>{props.col1}</th>
              <th>{props.col2}</th>
            </tr>
          </thead>
          <tbody>
            {props.content.length > 0 ? (
              props.content.map((mensaje, i) => (
                <TableItem
                  ix={i}
                  valueU={mensaje.userOrig}
                  valueM={mensaje.messages}
                  ids={mensaje.id}
                />
              ))
            ) : (
              <h1 className="text-center">
                Loading... <Spinner animation="border" role="status"></Spinner>
              </h1>
            )}

          </tbody>
        </table>
      </div>
    </>
  );
};

TableMessage.propTypes = {
  col1: PropTypes.string,
  col2: PropTypes.string,
  content: PropTypes.obj,
};

export default TableMessage;
