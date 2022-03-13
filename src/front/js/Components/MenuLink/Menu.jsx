import React from "react";
import MenuItem from "./MenuItem.jsx";
import PropTypes from "prop-types";

import "./Menu.css";

const Menu = (props) => {
  return (
    <>
      <div className="sidebar">
        {props.models.map((val, i) => (
          <MenuItem
            key={i}
            menuIcon={val.iconMenu}
            placeholder={val.placeHolderMenu}
          />
        ))}
      </div>
    </>
  );
};

Menu.propTypes = {
  models: PropTypes.array,
};

export default Menu;
