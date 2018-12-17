import React, { Component } from "react";

export default class ProductPrice extends Component {
  render() {
    return <span className="price">{this.props.price}</span>;
  }
}
