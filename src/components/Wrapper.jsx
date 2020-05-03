import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Courses from "../Pages/Courses";

export class Wrapper extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/home" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/courses" component={ Courses } />
          </Switch>
        </Router>
      </div>
    );
  }
}
