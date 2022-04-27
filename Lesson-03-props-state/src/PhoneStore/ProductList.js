import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  render() {
    const { products, onSelectProduct } = this.props;
    return (
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            onSelectProduct={onSelectProduct}
          />
        ))}
      </div>
    );
  }
}
