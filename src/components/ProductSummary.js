import React, { Component } from "react";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import Button from "./Button";

import "./ProductSummary.css";

export default class ProductSummary extends Component {
  render() {
    return (
      <div className="product-summary">
        <div className="img-container">
          <img src={this.props.imgUrl} className="product-img" />
        </div>
        <ProductName name={this.props.name} />
        <ProductPrice price={this.props.price} />
        <Button>Comprar</Button>
      </div>
    );
  }
}
