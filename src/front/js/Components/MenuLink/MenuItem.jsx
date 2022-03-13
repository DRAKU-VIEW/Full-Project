import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./MenuItem.css";

const MenuItem = (props) => {
  const [state, setState] = useState(props.state || false);

  return (
    <div className="bg-menu">
      <NavLink
        exact
        activeClassName="activee"
        to={`/${props.placeholder}`}
        disabled={state}
        className="menu"
      >
        <FontAwesomeIcon className="icon-menu" icon={props.menuIcon} />
        {props.placeholder}
      </NavLink>
    </div>
  );
};
MenuItem.propTypes = {
  placeholder: PropTypes.string,
  state: PropTypes.bool,
  menuIcon: PropTypes.object,
};

export default MenuItem;
