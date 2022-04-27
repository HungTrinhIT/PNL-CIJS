import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { product, onSelectProduct } = this.props;
    const { name, img, id } = product;
    return (
      <div className="product-item">
        <div className="product-img">
          <img src={img} />
        </div>
        <div className="product-infor">
          <p className="product-name">{name}</p>
          <button
            className="btn btn-primary"
            onClick={() => onSelectProduct(id)}
          >
            Xem chi tiet
          </button>
        </div>
      </div>
    );
  }
}
