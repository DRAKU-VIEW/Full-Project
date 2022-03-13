import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./TertiaryButton.css";

const TerciaryButton = (props) => {
  const [textButtonT, setTextButtonT] = useState(props.placeholder);

  const [state, setState] = useState(props.state || false);
  const handleClick = (ev) => {
    ev.preventDefault();
    setTextButtonT(props.changePlacehold);
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={state}
        className={state ? "tertiaryB-disabled" : "tertiaryB"}
      >
        <FontAwesomeIcon className="icon" icon={props.symbol} />
        {textButtonT}
      </button>
    </>
  );
};

TerciaryButton.propTypes = {
  placeholder: PropTypes.string,
  handleClick: PropTypes.func,
  state: PropTypes.bool,
};

export default TerciaryButton;
