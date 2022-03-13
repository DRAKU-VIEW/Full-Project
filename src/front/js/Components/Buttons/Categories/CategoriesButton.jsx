import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CategoriesButton.css";

const CategoriesButton = (props) => {
  const [state, setState] = useState(props.state || false);

  return (
    <>
      <div className="bg-categories">
        <NavLink
          exact
          activeClassName="active"
          to={`/${props.placeholder}`}
          disabled={state}
          className="categories"
        >
          <div className="mt-2">
            <FontAwesomeIcon className="symbol" icon={props.symbol} />
            <div>{props.placeholder}</div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

CategoriesButton.propTypes = {
  placeholder: PropTypes.string,
  cb: PropTypes.func,
  state: PropTypes.bool,
  isSelect: PropTypes.bool,
  symbol: PropTypes.object,
  goTo: PropTypes.string,
};

export default CategoriesButton;
