import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Quaternary.css";

const Quaternary = (props) => {
  const [data, setData] = useState(props.valueText);
  const changeMsg = (ev) => {
    let dato = ev.target.value;
    props.changeMsg(dato);
  };

  return (
    <>
      <div className="container">
        <div className="comment">
          <textarea
            className="textinput"
            placeholder="..."
            onChange={(ev) => {
              setData(ev.target.value);
              changeMsg(ev);
            }}
          >
            {data}
          </textarea>
        </div>
      </div>
    </>
  );
};

Quaternary.propTypes = {
  valueText: PropTypes.string,
};

export default Quaternary;
