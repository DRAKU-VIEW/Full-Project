import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../store/appContext.js";

import { Dropdown } from "react-bootstrap";

import "./DropdownProfile.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFilm,
  faHeart,
  faCommentDots,
  faCog,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

import profile from "../../resources/img/eggcito.png";

const DropdownProfile = () => {
  const { actions, store } = useContext(Context);

  const getMMessage = () => {
    actions.getMessages();
  };

  return (
    <>
      <Dropdown className="me-3">
        <Dropdown.Toggle variant="transparent" className="log shadow-none">
          <img
            className="profile rounded-circle"
            width={50}
            height={50}
            src={store.imageProfile == "" ? profile : store.imageProfile}
            alt="user profile"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <NavLink exact to={"/Profile"} className="linkUser">
            <Dropdown.Item href="/Profile">
              <FontAwesomeIcon className="icon mx-2" icon={faUser} />
              Profile
            </Dropdown.Item>
          </NavLink>
          <NavLink exact to={"/Channel"} className="linkUser">
            <Dropdown.Item href="/Channel">
              <FontAwesomeIcon className="icon mx-2" icon={faFilm} />
              Channel
            </Dropdown.Item>
          </NavLink>
          <NavLink exact to={"/Subscribers"} className="linkUser">
            <Dropdown.Item href="/Subscribers">
              <FontAwesomeIcon className="icon mx-2" icon={faHeart} />
              Subscribers
            </Dropdown.Item>
          </NavLink>
          <NavLink
            exact
            to={"/Messages"}
            className="linkUser"
            onClick={getMMessage}
          >
            <Dropdown.Item href="/Messages">
              <FontAwesomeIcon className="icon mx-2" icon={faCommentDots} />
              Messages
            </Dropdown.Item>
          </NavLink>
          <NavLink exact to={"/Settings"} className="linkUser">
            <Dropdown.Item href="/Settings">
              <FontAwesomeIcon className="icon mx-2" icon={faCog} />
              Settings
            </Dropdown.Item>
          </NavLink>
          <NavLink exact to={"/LogOut"} className="linkUser">
            <Dropdown.Item href="/LogOut">
              <FontAwesomeIcon className="icon mx-2" icon={faDoorOpen} />
              Log Out
            </Dropdown.Item>
          </NavLink>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownProfile;
