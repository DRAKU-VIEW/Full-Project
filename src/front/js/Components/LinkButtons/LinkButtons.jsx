import React, { useState } from "react";
import PropTypes from "prop-types";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import "./LinkButtons.css";

const LinkButtons = (props) => {
  const [radioValue, setRadioValue] = useState(1);

  return (
    <div>
      <ButtonGroup>
        {props.models.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            className={props.select[idx] ? "buttonSelect" : "linkButton"}
            name="radio"
            active={radio.value === 1 ? true : false}
            value={radio.value}
            checked={radioValue == radio.value}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value);
            }}
            onClick={() => {
              props.butLinking(radio.value);
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};

LinkButtons.propTypes = {
  butLinking: PropTypes.func,
  models: PropTypes.array,
  select: PropTypes.array,
};

export default LinkButtons;
