import React, { Component } from "react";
import ProductSummary from "./ProductSummary";

export default class Gallery extends Component {
  formatPrice = price => {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2
    });
    if (price) {
      return `Por ${formatter.format(price)}`;
    } else {
      return "Indisponível";
    }
  };

  renderProductSummary = index => {
    const product = this.props.products[index];
    const productName = product.productName;
    const regex = new RegExp(this.props.search.toLowerCase());
    if (productName.toLowerCase().match(regex) || !this.props.search) {
      const productPriceRaw = product.items[0].sellers[0].commertialOffer.Price;
      const productPrice = this.formatPrice(productPriceRaw);
      const productImgUrl = product.items[0].images[0].imageUrl;
      const productID = product.productID;

      return (
        <ProductSummary
          key={productID}
          name={productName}
          price={productPrice}
          imgUrl={productImgUrl}
        />
      );
    }
  };

  render() {
    const products = this.props.products;
    return (
      <div className="gallery">
        {products.map((el, index) => this.renderProductSummary(index))}
      </div>
    );
  }
}
