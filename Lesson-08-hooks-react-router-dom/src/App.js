import React, { Component } from "react";

import "./App.css";
import { DemoHooks } from "./DemoHooks";
import DemoRouting from "./DemoRouting";
export default class App extends Component {
  state = {
    count: 0,
  };

  handleCount = (value) => {
    this.setState((prevState) => {
      return { count: prevState.count + value };
    });
  };

  render() {
    return (
      <div>
        <DemoRouting />
      </div>
    );
  }
}

/* <button onClick={() => this.handleCount(-1)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.handleCount(+1)}>+</button> */
