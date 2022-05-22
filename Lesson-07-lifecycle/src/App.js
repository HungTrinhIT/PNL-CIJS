import React, { Component } from "react";
import Header from "./layouts/Header";
import Homepage from "./pages/Homepage";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Homepage />
      </div>
    );
  }
}
