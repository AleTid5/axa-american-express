import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import Landing from "./Landing";

export default function Pages() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </Router>
  );
}
