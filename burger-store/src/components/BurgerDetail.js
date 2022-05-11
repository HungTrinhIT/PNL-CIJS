import React, { Component } from "react";
import LayoutContainer from "./LayoutContainer";

const Bacon = () => <div className="bacon"></div>;
const Salad = () => <div className="salad"></div>;
const Cheese = () => <div className="cheese"></div>;
const Meat = () => <div className="meat"></div>;

export default class BurgerDetail extends Component {
  render() {
    const { menu } = this.props;
    const values = Object.values(menu);

    const burgerBody = values.map((item, index) => {
      const { key, amount } = item;
      const toppingComponent = [];
      for (let i = 1; i <= amount; i++) {
        switch (key) {
          case "bacon":
            toppingComponent.push(<Bacon />);
            break;
          case "salad":
            toppingComponent.push(<Salad />);
            break;
          case "cheese":
            toppingComponent.push(<Cheese />);
            break;
          case "meat":
            toppingComponent.push(<Meat />);
            break;
          default:
            break;
        }
      }

      return toppingComponent;
    });
    return (
      <LayoutContainer>
        <div className="box">
          <div className="bread-top">
            <div className="seeds"></div>
            <div className="seeds2"></div>
          </div>

          {burgerBody}

          <div className="bread-bottom"></div>
        </div>
      </LayoutContainer>
    );
  }
}
