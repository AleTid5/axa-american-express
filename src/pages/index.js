import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import Landing from "./Landing";
import Home from "./Home";

export default function Pages() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}
