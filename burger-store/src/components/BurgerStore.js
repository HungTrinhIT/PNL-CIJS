import { Component } from "react";
import BurgerDetail from "./BurgerDetail";
import BurgerMenu from "./BurgerMenu";
import Header from "./Header";

class BurgerStore extends Component {
  state = {
    salad: {
      key: "salad",
      amount: 0,
      price: 10,
    },
    cheese: {
      key: "cheese",
      amount: 0,
      price: 20,
    },
    bacon: {
      key: "bacon",
      amount: 0,
      price: 28,
    },
    meat: {
      key: "meat",
      amount: 0,
      price: 25,
    },
  };

  // onHandleMoreTopping = () => {};
  // onHandleLessTopping = () => {};
  onHandleToppingChange = (key, value) => {
    const menu = this.state;
    menu[key]["amount"] += value;
    this.setState({
      ...menu,
    });
  };

  onReset = () => {};
  onOrder = () => {};
  render() {
    return (
      <div>
        <Header title="Burger King" />
        <div className="burger-body">
          <div className="burger-container row">
            <div className="col-12 col-lg-6">
              <BurgerDetail menu={this.state} />
            </div>
            <div className="col-12 col-lg-6">
              <BurgerMenu
                menu={this.state}
                // onMore={this.onHandleMoreTopping}
                // onLess={this.onHandleLessTopping}
                onToppingChange={this.onHandleToppingChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BurgerStore;
