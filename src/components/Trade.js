import React, { Component } from "react";
import PropTypes from "prop-types";

class Trade extends Component {
  render() {
    return (
      <div>
        <p>Trade</p>
        <form>
          <label>Symbol</label>
          <input type="text" name="symbol" value={this.props.symbol} />
          <label>Buy/Sell</label>
          <select>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={this.props.quantity}
            onChange={this.props.updateQuantity}
          />
          <label>Date</label>
          <input type="text" name="date" value={new Date()} />
          <label>Price</label>
          <input type="text" name="price" value={this.props.stock.price} />
          <label>Cost</label>
          <input type="text" name="price" value={this.props.stock.cost} />
          <input type="submit" onSubmit={"submitOrder"} />
        </form>
        <p> Cash Availble </p>
        <p> {this.props.balance} </p>
        <p> Order Status </p>
        <p> {this.props.validity} </p>
      </div>
    );
  }
}

export default Trade;
