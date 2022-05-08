import React, { Component } from "react";
import LayoutContainer from "./LayoutContainer";

export default class BurgerMenu extends Component {
  render() {
    const { menu, onToppingChange } = this.props;
    const values = Object.values(menu);

    const tbodyContent = values.map((item, index) => {
      const { key, price, amount } = item;
      const label = key.slice(0, 1).toUpperCase() + key.slice(1, key.length);
      const totalToppingPrice = amount * price;

      // handle disables less button
      // cach 1
      // let disabled = null;
      // if (amount === 0) {
      //   disabled = true;
      // } else {
      //   disabled = false;
      // }

      // Cach 2
      // const disable = amout === 0? true: false;

      // Cach 3
      const isLessButttonDisabled = amount === 0;

      return (
        <tr key={index}>
          <td>{label}</td>
          <td className="burger-item-amount">
            <button
              disabled={isLessButttonDisabled}
              className="btn btn-primary"
              onClick={() => onToppingChange(key, -1)}
            >
              Less
            </button>
            <span>{amount}</span>
            <button
              className="btn btn-primary"
              onClick={() => onToppingChange(key, 1)}
            >
              More
            </button>
          </td>
          <td>{price}</td>
          <td>{totalToppingPrice}</td>
        </tr>
      );
    });

    // Cach 1
    let totalPrice = 0;
    for (let topping of values) {
      totalPrice += topping["amount"] * topping["price"];
    }
    return (
      <LayoutContainer>
        <h4 className="text-center">Menu</h4>
        <div className="menu-container">
          <table className="table">
            <thead>
              <tr>
                <th>Topping</th>
                <th>Amount</th>
                <th>Unit Price</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {tbodyContent}
              <tr>
                <td>
                  <strong>Total price</strong>
                </td>
                <td></td>
                <td></td>
                <td>
                  <strong>{totalPrice}$</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <button className="btn btn-primary me-2">Order now</button>
            <button className="btn btn-primary">Reset</button>
          </div>
        </div>
      </LayoutContainer>
    );
  }
}
