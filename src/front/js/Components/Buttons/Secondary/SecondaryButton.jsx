import React, { useState } from "react";
import PropTypes from "prop-types";

import "./SecondaryButton.css";

const SecondaryButton = (props) => {
  const [textButtonS, setTextButtonS] = useState(props.placeholder);

  const [state, setState] = useState(props.state || false);
  const [clas, setClas] = useState(false);
  // * Methods
  const handleClick = (ev) => {
    // ev.preventDefault();
    setClas(true);
    setTextButtonS(props.changePlacehold);
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={state}
        className={clas ? "secondary-disabled" : "secondary"}
      >
        {textButtonS}
      </button>
    </>
  );
};

SecondaryButton.propTypes = {
  placeholder: PropTypes.string,
  handleClick: PropTypes.func,
  state: PropTypes.bool,
  changePlacehold: PropTypes.string,
};

export default SecondaryButton;
