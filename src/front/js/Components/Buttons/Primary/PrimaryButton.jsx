import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./PrimaryButton.css";

const PrimaryButton = (props) => {
  const [textButtonP, setTextButtonP] = useState(props.placeholder);

  const [state, setState] = useState(props.state || false);
  // * Methods
  const handleClick = () => {
    props.handleClick();
    setTextButtonP(props.changePlacehold);
    //setState(true)
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={state ? "primaryB-disabled" : "primaryB"}
        disabled={state}
      >
        {textButtonP} <FontAwesomeIcon className="icoon" icon={props.face} />
      </button>
    </>
  );
};

PrimaryButton.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  state: PropTypes.bool,
  face: PropTypes.object,
  changePlacehold: PropTypes.string,
};

export default PrimaryButton;
