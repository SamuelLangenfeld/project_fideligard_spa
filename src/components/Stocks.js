import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";

class Stocks extends Component {
  componentDidMount() {
    this.props.getStocks();
  }

  render() {
    let stocksList = this.props.stocks.map((stock, i) => {
      return (
        <tr key={i}>
          <td>{stock.symbol}</td>
          <td>{stock.price}</td>
          <td>{stock.d1Price}</td>
          <td>{stock.d7Price}</td>
          <td>{stock.d30Price}</td>
          <button onClick={this.props.redirect}>Trade</button>
        </tr>
      );
    });

    return (
      <Router>
        <table>
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
      </Router>
    );
  }
}

Stocks.propTypes = {
  stocks: PropTypes.array
};

export default Stocks;
