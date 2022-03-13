//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "./index.css";

//import your own components
import Layout from "./Layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
