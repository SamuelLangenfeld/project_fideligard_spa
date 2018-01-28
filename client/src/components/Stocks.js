import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Stocks extends Component {
  componentDidMount() {
    this.props.getStocks();
  }

  render() {
    let stocksList = this.props.stocks.map(stock => {
      return (
        <tr key={stock.symbol}>
          <td>{stock.symbol}</td>
          <td>{stock.price}</td>
          <td>{stock.d1Price}</td>
          <td>{stock.d7Price}</td>
          <td>{stock.d30Price}</td>
          <td>
            <Link to={`/trade/${stock.symbol}`}>Trade</Link>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
              <th>1d</th>
              <th>7d</th>
              <th>30d</th>
              <th>Trade?</th>
            </tr>
          </thead>
          <tbody>{stocksList}</tbody>
        </table>
      </div>
    );
  }
}

Stocks.propTypes = {
  stocks: PropTypes.array
};

export default Stocks;
