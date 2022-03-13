import React, { useState, useEffect, useContext } from "react";
import { GenerateNormalDivs } from "./NormalGrid.js";
import parse from "html-react-parser";
import { Context } from "../../store/appContext.js";
import { Spinner } from "react-bootstrap";

import "./NormalGrid.css";

import ContentNormal from "./ModelGridNormal.jsx";

const NormalGridArray = [
  new ContentNormal(1, "Ibai"),
  new ContentNormal(5, "Rubius"),
  new ContentNormal(2, "Bugafantastic"),
  new ContentNormal(6, "Berto"),
  new ContentNormal(4, "Juanmiguel"),
  new ContentNormal(3, "Ole"),
  new ContentNormal(7, "Rodrigo"),
  new ContentNormal(9, "Pepe"),
  new ContentNormal(8, "Isidro"),
];

NormalGridArray.sort((a, b) => {
  return a.priority - b.priority;
});

const NormalGrid = () => {
  const { actions, store } = useContext(Context);
  // const [state, setState] = useState("");
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
    });
  }, []);
  
  return (
    <>
      {store.followeres.length > 0 ? (
        <div className="flex-div">
          {parse(GenerateNormalDivs(store.followeres))}
        </div>
      ) : (
        <h1 className="text-center">
          Loading... <Spinner animation="border" role="status"></Spinner>
        </h1>
      )}
    </>
  );
};

export default NormalGrid;
