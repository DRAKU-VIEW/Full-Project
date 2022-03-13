import React from "react";
import "./HomeProfile.css";
import "./CommunityProfile.css";
import NormalGrid from "../NormalGrid/NormalGrid.jsx";

const CommunityProfile = () => {
  return (
    <>
      <h5 className="color-title d-flex justify-content-center pt-3">
        All Followers
      </h5>
      <NormalGrid />
    </>
  );
};

export default CommunityProfile;
