import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import "./ButtonLetter.css";

const ButtonLetter = (props) => {
  const [textButtonLet, setTextButtonLet] = useState(props.placeholder);

  const [state, setState] = useState(props.state || false);
  const handleClick = (ev) => {
    // ev.preventDefault();
    props.changePlacehold
      ? setTextButtonLet(props.changePlacehold)
      : setTextButtonLet(props.placeholder);
    props.handleClick();
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={state}
        className={state ? "letter-disabled" : "letter"}
      >
        {textButtonLet}
      </button>
    </>
  );
};

ButtonLetter.propTypes = {
  placeholder: PropTypes.string,
  handleClick: PropTypes.func,
  state: PropTypes.bool,
};

export default ButtonLetter;
