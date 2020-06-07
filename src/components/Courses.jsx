import React, { Component } from "react";
import webdev from "../assets/webdev.png";
import marketing from "../assets/marketing.jpeg";
import app from "../assets/appstore.jpg";

export default class Courses extends Component {
  render() {
    return (
      <div className="courses">
        <div className="container">
          <a href="/" className="card">
            <div className="img img1"></div>
            <div className="info"></div>
          </a>
          <a href="/" className="card">
            <div className="img img2"></div>
            <div className="info"></div>
          </a>
          <a href="/" className="card">
            <div className="img img3"></div>
            <div className="info"></div>
          </a>
        </div>
      </div>
    );
  }
}
