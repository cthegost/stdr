import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Wrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;
