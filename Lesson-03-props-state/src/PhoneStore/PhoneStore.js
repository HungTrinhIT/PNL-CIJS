import React, { Component } from "react";
import { Header } from "./Header";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import "./PhoneStore.css";

class PhoneStore extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Samsung Galaxy A10",
        price: "40906000",
        img: "images/phone-1.jpeg",
        info: {
          screen: "AMOLED Full HD 9.0",
          os: "Android 9.0",
          frontCamera: "20MP",
          backCamera: "Chính 48MB, phụ 30MP",
        },
        ram: "4 GB",
        rom: "64 GB",
      },
      {
        id: 2,
        name: "IPhone12",
        price: "200306000",
        img: "images/phone-2.jpeg",
        info: {
          screen: "Full HD 12.0",
          os: "IOS 14",
          frontCamera: "20MP",
          backCamera: "Chính 100MB, phụ 30MP",
        },
        ram: "16 GB",
        rom: "32 GB",
      },
      {
        id: 3,
        name: "Xiaomi Note 10",
        price: "10005000",
        img: "images/phone-3.jpeg",
        info: {
          screen: "OLED 10.0",
          os: "Android 8.0",
          frontCamera: "69MP",
          backCamera: "Chính 96MB, phụ 30MP",
        },
        ram: "10 GB",
        rom: "64 GB",
      },
    ],
    selectedProduct: null,
  };

  onSelectProduct = (id) => {
    const products = this.state.products;
    let selectedProduct = null;

    // Cach 1
    // for (let index = 0; index < products.length; index++) {
    //   const product = products[index];
    //   if (product.id === id) {
    //     selectedProduct = product;
    //     break;
    //   }
    // }

    selectedProduct = products.find((product) => product.id === id);

    this.setState({

      selectedProduct, //selectedProduct: selectedProduct
    });
  };

  render() {
    return (
      <div className="store-container">
        <Header />
        <ProductList
          products={this.state.products}
          onSelectProduct={this.onSelectProduct}
        />
        <ProductDetail product={this.state.selectedProduct} />
      </div>
    );
  }
}

export default PhoneStore;
