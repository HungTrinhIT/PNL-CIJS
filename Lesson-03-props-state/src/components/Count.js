import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onDecreaseHandler = () => {
    const newCount = this.state.count - 1;

    this.setState({
      count: newCount,
    });
  };

  onIncreaseHanlder = () => {
    const newCount = this.state.count + 1;

    this.setState({
      count: newCount,
    });
  };

  onCountHandler = (value) => {
    const newCount = this.state.count + value;
    this.setState({
      count: newCount,
    });
  };

  render() {
    const count = this.state.count;
    console.log("Render runsssssss");
    return (
      <div>
        {/* <button onClick={this.onDecreaseHandler}>Decrease</button> */}
        <button onClick={() => this.onCountHandler(-1)}>Decrease</button>
        <div>{count}</div>
        <button onClick={() => this.onCountHandler(1)}>Increase</button>
        {/* <button onClick={this.onIncreaseHanlder}>Increase</button> */}
      </div>
    );
  }
}

export default Count;
