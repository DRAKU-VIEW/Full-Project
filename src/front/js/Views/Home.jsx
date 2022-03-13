import React from "react";
import Header from "../ViewsComponents/Header/Header.jsx";
import BodyGrid from "../ViewsComponents/Grid/BodyGrid.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <div className="colorBack pt-3">
        <BodyGrid />
      </div>
    </>
  );
};

export default Home;
