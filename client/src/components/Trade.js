import React, { Component } from "react";
import PropTypes from "prop-types";
import { setStock } from "../actions";

class Trade extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.symbol != this.props.symbol) {
      this.props.setStock(nextProps.symbol);
    }
  }

  componentDidMount() {
    this.props.setStock(this.props.symbol);
  }

  render() {
    let stock = this.props.stock;
    return (
      <div>
        <form>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">Symbol</label>
            <input
              type="text"
              name="symbol"
              value={stock.symbol}
              readOnly={true}
              className="form-control col-md-8"
            />
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">Buy/Sell</label>
            <select className="">
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={stock.quantity}
              onChange={this.props.updateQuantity}
              className="form-control col-md-8"
            />
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">Date</label>
            <input
              type="text"
              name="date"
              readOnly={true}
              value={new Date()}
              className="form-control col-md-8"
            />
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">Price</label>
            <input
              type="text"
              name="price"
              value={stock.price}
              readOnly={true}
              className="form-control col-md-8"
            />
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">Cost</label>
            <input
              type="text"
              name="price"
              value={stock.cost}
              readOnly={true}
              className="form-control col-md-8"
            />
          </div>
          <div>
            <input
              type="submit"
              onSubmit={e => {
                e.preventDefault();
              }}
              className="btn btn-primary"
              value="Make a Trade!"
            />
          </div>
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
