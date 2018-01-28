import React, { Component } from "react";
import PropTypes from "prop-types";

class Trade extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.symbol && nextProps.symbol !== this.props.symbol) {
      this.props.setStock(nextProps.symbol);
    }
  }

  componentDidMount() {
    this.props.setStock(this.props.symbol);
    this.props.setTransactionType("BUY");
  }

  render() {
    let stock = this.props.stock || {};
    let date = this.props.date;
    let validity = this.props.orderStatus ? (
      <p className="valid">Valid</p>
    ) : (
      <p className="invalid">Invalid</p>
    );

    const tradeFunc = this.props.orderStatus
      ? this.props.confirmTrade
      : this.props.invalidTrade;

    return (
      <div className="row">
        <div className="col-md-8">
          <form id="#trade" onSubmit={tradeFunc}>
            <div className="form-group row">
              <label className="col-md-4 col-form-label">Symbol</label>
              <div className="form-control col-md-8" readOnly={true}>
                {stock.symbol}
              </div>
              <input
                type="hidden"
                name="symbol"
                readOnly={true}
                value={stock.symbol}
              />
            </div>
            <div className="form-group row">
              <label className="col-md-4 col-form-label">Buy/Sell</label>
              <select form="trade" onChange={this.props.setTransactionType}>
                <option value="BUY">Buy</option>
                <option value="SELL">Sell</option>
              </select>
            </div>
            <input
              type="hidden"
              name="type"
              value={this.props.transactionType}
            />
            <div className="form-group row">
              <label className="col-md-4 col-form-label">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={stock.quantity}
                onChange={this.props.updateQuantity}
                className="form-control col-md-8"
                min={1}
              />
            </div>
            <div className="form-group row">
              <label className="col-md-4 col-form-label">Date</label>
              <input
                type="text"
                name="date"
                readOnly={true}
                value={date}
                className="form-control col-md-8"
              />
            </div>
            <div className="form-group row">
              <label className="col-md-4 col-form-label">Price</label>
              <div className="form-control col-md-8" readOnly={true}>
                {stock.price}
              </div>
              <input type="hidden" name="price" value={stock.price} />
            </div>
            <div className="form-group row">
              <label className="col-md-4 col-form-label">Cost</label>
              <div className="form-control col-md-8" readOnly={true}>
                {stock.cost ? stock.cost.toFixed(2) : ""}
              </div>
              <input type="hidden" name="cost" value={stock.cost} />
            </div>
            <div>
              <input
                type="submit"
                className="btn btn-primary"
                value="Make a Trade!"
              />
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <p> Cash Available </p>
          <p> {this.props.balance} </p>
          <p> Order Status </p>
          {validity}
        </div>
      </div>
    );
  }
}

Trade.propTypes = {
  stock: PropTypes.object,
  symbol: PropTypes.string
};

export default Trade;
