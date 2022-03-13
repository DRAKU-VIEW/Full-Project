import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./PrimaryInput.css";

const PrimaryInput = (props) => {
  // * Properties
  const [state, setState] = useState(props.state || false);
  const [data, setData] = useState("");
  // * Methods
  const handleClick = (ev) => {
    props.handleClick();
  };
  const handleSearch = (ev) => {
    ev.preventDefault();
    props.handleSearch(data);
    setData("");
  };
  // const handleDelete = (ev) => {
  //   if (ev.key === "Enter") setData("");
  // };

  return (
    <>
      <div className="boxDiv d-flex">
        <input
          onClick={handleClick}
          disabled={state}
          className={state ? "primary-disabled" : "primary"}
          placeholder={props.placeholder}
          onChange={(ev) => setData(ev.target.value)}
          // onKeyPress={(ev) => handleDelete(ev)}
          value={data}
        />
        <button className="search" onClick={handleSearch}>
          <FontAwesomeIcon className="icon" icon={props.search} />
        </button>
      </div>
    </>
  );
};

PrimaryInput.propTypes = {
  placeholder: PropTypes.string,
  valSearch: PropTypes.string,
  handleClick: PropTypes.func,
  onChangeSearch: PropTypes.func,
  state: PropTypes.bool,
};

export default PrimaryInput;
