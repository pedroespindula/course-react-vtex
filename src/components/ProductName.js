import React, { Component } from "react";

export default class ProductName extends Component {
  render() {
    return <span className="name">{this.props.name}</span>;
  }
}
