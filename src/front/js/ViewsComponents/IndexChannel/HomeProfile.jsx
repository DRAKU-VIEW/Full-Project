import React from "react";

import "./HomeProfile.css";

const HomeProfile = () => {
  return (
    <div>
      <h3 className="mt-3">Whats new, Bugafantastic?</h3>
      <h5 className="mt-4">
        You have now <span className="data">500 followers</span>
      </h5>
      <h5 className="mt-4">
        Your last categories are:
        <span className="data">Minecraft, Fifa22, Warzone</span>
      </h5>
      <br />
      <div>
        <h4 className="mt-3">Some statistics:</h4>
        <div className="d-flex mb-2">
          <div className="statistic justify-content-start mx-2 p-2">
            <h4>Average Viewers</h4>
            <div className="justify-content-center d-flex data">350</div>
          </div>
          <div className="statistic justify-content-center mx-2 p-2">
            <h4>Max Viewers</h4>
            <div className="justify-content-center d-flex data">550</div>
          </div>
          <div className="statistic justify-content-end mx-2 p-2">
            <h4>Max Interactions</h4>
            <div className="justify-content-center d-flex data">260</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
