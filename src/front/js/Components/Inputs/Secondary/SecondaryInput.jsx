import React from "react";
import { Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

import "./SecondaryInput.css";

const SecondaryInput = (props) => {
  const handleClick = () => {
    props.handleClick();
  };
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          className="secondary-in"
          variant=""
          id="dropdown-basic"
        >
          {props.principalText}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={handleClick}>
            {props.secondaryText}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
SecondaryInput.propTypes = {
  principalText: PropTypes.string,
  secondaryText: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
export default SecondaryInput;
