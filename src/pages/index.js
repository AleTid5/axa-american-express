import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import Benefits from "./Benefits";
import Certs from "./Certs";
import Claims from "./Claims";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Landing from "./Landing";
import Profile from "./Profile";

export default function Pages() {
  return (
    <Router>
      <Switch>
        <Route path="/benefits" exact component={Benefits} />
        <Route path="/certs" exact component={Certs} />
        <Route path="/claims" exact component={Claims} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/home" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}
