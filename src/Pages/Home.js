import React, { Component } from "react";
import { Welcome } from "../components/Welcome";
import { Today } from "../components/Today";
import { Events } from "../components/Events";
import { Startup } from "../components/Startup";
import { Withus } from "../components/Withus";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Today />
        <Events />
        <Startup />
        <Withus />
      </div>
    );
  }
}
