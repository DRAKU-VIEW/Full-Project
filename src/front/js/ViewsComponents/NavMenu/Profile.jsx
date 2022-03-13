import React, { useState, useEffect, useContext } from "react";
import Menu from "../../Components/MenuLink/Menu.jsx";
import { arrModels } from "../../Components/MenuLink/Model.js";
import Header from "../Header/Header.jsx";
import SecondaryButton from "../../Components/Buttons/Secondary/SecondaryButton.jsx";
import TertiaryInput from "../../Components/Inputs/Tertiary/TertiaryInput.jsx";
import Quaternary from "../../Components/Inputs/Quaternary/Quaternary.jsx";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton.jsx";
import { Context } from "../../store/appContext.js";

import egg from "../../resources/img/eggcito.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./Profile.css";

const Profile = () => {
  const { actions, store } = useContext(Context);
  const [chanNameUser, setChanNameUser] = useState(store.user[0].username);
  const [chanBio, setChanBio] = useState(store.dataChannel);

  const handleClikPrimary = () => {
    actions.putData({
      username: `${chanNameUser}`,
      biography: `${chanBio}`,
    });
  };

  const changeUser = (e) => {
    setChanNameUser(e);
  };
  const changeBio = (e) => {
    setChanBio(e);
  };
  const [files, setFiles] = useState(null);
  const [filesBan, setFilesBan] = useState(null);
  const uploadImage = (evt) => {
    let myToken = localStorage.getItem("token");
    evt.preventDefault();
    console.log("This are the files", files);
    let body = new FormData();
    body.append("profile_image", files[0]);
    const options = {
      body,
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${myToken}`,
      },
    };
    fetch(
      "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/image",
      options
    )
      .then((resp) => resp.json())
      .then((data) => console.log("Success!!!!", data))
      .catch((erros) => console.error("ERRORRRRRR!!!", erros));
  };
  const uploadBanner = (evt) => {
    let myToken = localStorage.getItem("token");
    evt.preventDefault();
    console.log("This are the files", filesBan);
    let body = new FormData();
    body.append("profile_banner", filesBan[0]);
    const options = {
      body,
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${myToken}`,
      },
    };
    fetch(
      "https://3001-ismabk-backend-1mpb0zq8lvh.ws-eu34.gitpod.io/banner",
      options
    )
      .then((resp) => resp.json())
      .then((data) => console.log("Success!!!!", data))
      .catch((erros) => console.error("ERRORRRRRR!!!", erros));
  };
  return (
    <div className="colorBack">
      <Header />
      <Menu models={arrModels} />
      <div className="ml150">
        <div className="ms-4 mt-4">
          <h3 className="color-title">Profile Picture and Banner</h3>
          <div className="d-flex justify-content-between mt-4">
            <div className="d-flex">
              <img
                className="profile rounded-circle mx-3"
                width={60}
                height={60}
                src={store.imageProfile == "" ? egg : store.imageProfile}
                alt="user profile"
              />
              <div className="d-flex align-self-center">
                <form onSubmit={uploadImage}>
                  <input
                    type="file"
                    onChange={(e) => setFiles(e.target.files)}
                  />
                  <SecondaryButton
                    placeholder={"Update"}
                    changePlacehold={"Updated"}
                  />
                </form>
              </div>
              <div className="d-flex align-self-center mx-3">
                <button className="rubbish">
                  <FontAwesomeIcon className="icon" icon={faTrash} />
                </button>
              </div>
            </div>
            <div className="d-flex me-5">
              <img
                className="profile  mx-3"
                width={100}
                height={60}
                src={store.imageBanner == "" ? egg : store.imageBanner}
                alt="user banner"
              />
              <div className="d-flex align-self-center">
                <form onSubmit={uploadBanner}>
                  <input
                    type="file"
                    onChange={(e) => setFilesBan(e.target.files)}
                  />
                  <SecondaryButton
                    placeholder={"Update"}
                    changePlacehold={"Updated"}
                  />
                </form>
              </div>
              <div className="d-flex align-self-center mx-3">
                <button className="rubbish">
                  <FontAwesomeIcon className="icon" icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
          <h3 className="color-title mt-5">Profile Settings</h3>
          <div className="ms-5 color-title mt-3">
            <div className="d-flex align-items-baseline">
              <h5 className="me-4">Display Name:</h5>
              <TertiaryInput
                inputSetting={true}
                check={true}
                valuePlace={"Ismael Bugarin"}
                typeInput={"none"}
              />
            </div>
            <div className="d-flex mt-4 align-items-baseline">
              <h5 className="me-4">Username:</h5>
              <TertiaryInput
                inputSetting={true}
                check={true}
                valuePlace={chanNameUser}
                typeInput={"none"}
                changeName={changeUser}
              />
            </div>
            <div className="d-flex mt-4">
              <h5>Bio:</h5>
              <Quaternary valueText={chanBio} changeMsg={changeBio} />
            </div>
            <div className="d-flex justify-content-end me-4 mt-3">
              <PrimaryButton
                handleClick={handleClikPrimary}
                placeholder={"Save Changes"}
                changePlacehold={"Saved"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
