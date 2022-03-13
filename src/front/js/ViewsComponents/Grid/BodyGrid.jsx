import React, { useEffect, useState, useContext } from "react";
import { GenerateDivs, GenerateFibonacci } from "./Grid.js";
import parse from "html-react-parser";
import { Context } from "../../store/appContext.js";
import { Spinner } from "react-bootstrap";

import "./BodyGrid.css";
import Content from "./ModelGrid.jsx";
const modelG = [
  new Content(1, 290),
  new Content(5, 290),
  new Content(2, 290),
  new Content(6, 290),
  new Content(4, 290),
  new Content(3, 290),
  new Content(7, 290),
  new Content(9, 290),
  new Content(8, 290),
  new Content(10, 290),
];

modelG.sort((a, b) => {
  return a.priority - b.priority;
});

const BodyGrid = () => {
  const { actions, store } = useContext(Context);
  const [state, setState] = useState(
    GenerateDivs(
      window.innerWidth,
      GenerateFibonacci(7, 377, 610),
      store.movieG
    )
  );
  const resizer = () => {
    setState(
      GenerateDivs(
        window.innerWidth,
        GenerateFibonacci(7, 377, 610),
        store.movieG
      )
    );
  };
  useEffect(() => {
    resizer();
    window.addEventListener("resize", () => {
      resizer();
    });
  }, []);
  useEffect(() => {
    resizer();
  }, [store.movieG]);

  return (
    <>
      {store.movieG.length > 0 ? (
        <div>
          <div className="flamita">{parse(state)}</div>
        </div>
      ) : (
        <h1 className="text-center">
          Loading... <Spinner animation="border" role="status"></Spinner>
        </h1>
      )}
    </>
  );
};

export default BodyGrid;
