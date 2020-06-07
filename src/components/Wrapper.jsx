import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";


import Home from "../Pages/Home";
import About from "../Pages/About";
import Courses from "../Pages/Courses";
import Startup from "../Pages/Startup";


const history = createBrowserHistory();
export class Wrapper extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/courses" component={ Courses } />
            <Route exact path="/startup" component={ Startup } />
          </Switch>
        </Router>
      </div>
    );
  }
}
