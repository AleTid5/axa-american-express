import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import Benefits from "./Benefits";
import Certs from "./Certs";
import Home from "./Home";
import Landing from "./Landing";

export default function Pages() {
  return (
    <Router>
      <Switch>
        <Route path="/benefits" exact component={Benefits} />
        <Route path="/certs" exact component={Certs} />
        <Route path="/home" exact component={Home} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}
