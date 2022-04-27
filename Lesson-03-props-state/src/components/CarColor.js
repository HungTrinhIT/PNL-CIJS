import React, { Component } from "react";

export default class CarColor extends Component {
  state = {
    color: "black-car.png",
  };

  onColorChangeHandler = (newColor) => {
    this.setState({
      color: newColor,
    });
  };

  render() {
    return (
      <div className="car-container">
        <div className="car-img">
          <img src={`/images/${this.state.color}`} />
        </div>

        <div className="car-controller">
          <button
            className="btn btn-black"
            onClick={() => this.onColorChangeHandler("black-car.png")}
          >
            Black
          </button>
          <button
            className="btn btn-white"
            onClick={() => this.onColorChangeHandler("white-car.png")}
          >
            White
          </button>
          <button
            className="btn btn-red"
            onClick={() => this.onColorChangeHandler("red-car.png")}
          >
            Red
          </button>
        </div>
      </div>
    );
  }
}
