import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Views/Home.jsx";
import Profile from "./ViewsComponents/NavMenu/Profile.jsx";
import Channel from "./ViewsComponents/NavMenu/Channel.jsx";
import Subscribers from "./ViewsComponents/NavMenu/Subscribers.jsx";
import Messages from "./ViewsComponents/NavMenu/Messages.jsx";
import Settings from "./ViewsComponents/NavMenu/Settings.jsx";
import LogOut from "./ViewsComponents/NavMenu/LogOut.jsx";
import Games from "./ViewsComponents/NavCat/Games.jsx";
import Chatting from "./ViewsComponents/NavCat/Chatting.jsx";
import Learning from "./ViewsComponents/NavCat/Learning.jsx";
import Music from "./ViewsComponents/NavCat/Music.jsx";
import Trends from "./ViewsComponents/NavCat/Trends.jsx";
import Live from "./ViewsComponents/NavCat/Live.jsx";
import Street from "./ViewsComponents/NavCat/Street.jsx";
import InfoUser from "./ViewsComponents/InfoUser/InfoUser.jsx";
import Formu from "./Components/Formulary/Formu.jsx";

import StreamLive from "./ViewsComponents/Stream/StreamLive.jsx";
import Following from "./Views/Following.jsx";
import FormuLogin from "./Components/Formulary/FormuLogin.jsx";

import injectContext from "./store/appContext";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/form">
            <Formu />
          </Route>
          <Route exact path="/forml">
            <FormuLogin />
          </Route>
          <Route exact path="/Following">
            <Following />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route exact path="/Channel">
            <Channel />
          </Route>
          <Route exact path="/Subscribers">
            <Subscribers />
          </Route>
          <Route exact path="/Messages">
            <Messages />
          </Route>
          <Route exact path="/Settings">
            <Settings />
          </Route>
          <Route exact path="/LogOut">
            <LogOut />
          </Route>
          <Route exact path="/Trends">
            <Trends />
          </Route>
          <Route exact path="/Games">
            <Games />
          </Route>
          <Route exact path="/Music">
            <Music />
          </Route>
          <Route exact path="/Chatting">
            <Chatting />
          </Route>

          <Route exact path="/Live">
            <Live />
          </Route>
          <Route exact path="/Learning">
            <Learning />
          </Route>
          <Route exact path="/Street">
            <Street />
          </Route>
          <Route exact path="/InfoUser">
            <InfoUser />
          </Route>
          <Route exact path="/Stream">
            <StreamLive />
          </Route>
          <Route>
            <h1>Not found!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
