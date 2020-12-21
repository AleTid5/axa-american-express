import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import Landing from "./Landing";
import Home from "./Home";
import Benefits from "./Benefits";

export default function Pages() {
  return (
    <Router>
      <Switch>
        <Route path="/benefits" exact component={Benefits} />
        <Route path="/home" exact component={Home} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}
