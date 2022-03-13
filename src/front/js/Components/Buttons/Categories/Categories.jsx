import React from "react";
import CategoriesButton from "./CategoriesButton.jsx";
import Header from "../../../ViewsComponents/Header/Header.jsx";
import BodyGrid from "../../../ViewsComponents/Grid/BodyGrid.jsx";
import PropTypes from "prop-types";

import "./Categories.css";

const Categories = (props) => {
  return (
    <>
      <Header />
      <div className="colorBack">
        <div className="flower pt-3">
          {props.models.map((val, i) => (
            <CategoriesButton
              key={i}
              symbol={val.iconCat}
              placeholder={val.placeHolderCat}
            />
          ))}
        </div>
        <BodyGrid />
      </div>
    </>
  );
};

Categories.propTypes = {
  models: PropTypes.array,
};

export default Categories;
