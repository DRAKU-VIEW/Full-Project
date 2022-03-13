import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./TertiaryInput.css";

const TertiaryInput = (props) => {
  // * Properties
  const [state, setState] = useState(props.state || false);
  const [data, setData] = useState(props.valuePlace);
  const [show, setShow] = useState(props.typeInput);
  // * Methods
  const handleClick = () => {
    // ev.preventDefault();
    props.handleClick();
  };
  const handleShow = (ev) => {
    ev.preventDefault();
    props.handleShow();
    if (show === "password") setShow("none");
    else setShow("password");
  };
  const handleDelete = (ev) => {
    if (ev.key === "Enter") {
      if (!props.check) setData("");
    }
  };

  const changeName = (ev) => {
    let dato = ev.target.value;
    console.log(dato);

    props.changeName(dato);
  };

  return (
    <>
      <div
        className={`${props.inputSetting ? "settingInput" : "none"} boxxDiv`}
      >
        <input
          onClick={handleClick}
          disabled={state}
          type={show != "password" ? "none" : "password"}
          className={state ? "primary-disabled" : "tertiary"}
          placeholder={props.placeholder}
          onChange={(ev) => {
            setData(ev.target.value);
            changeName(ev);
          }}
          onKeyPress={(ev) => handleDelete(ev)}
          value={data}
        />
        <button className="eye" onClick={handleShow}>
          <FontAwesomeIcon
            className="icon"
            icon={show != "password" ? props.eye : props.noEye}
          />
        </button>
      </div>
    </>
  );
};

TertiaryInput.propTypes = {
  placeholder: PropTypes.string,
  handleClick: PropTypes.func,
  state: PropTypes.bool,
  typeInput: PropTypes.string,
  check: PropTypes.bool,
  valuePlace: PropTypes.string,
  inputSetting: PropTypes.bool,
};

export default TertiaryInput;
