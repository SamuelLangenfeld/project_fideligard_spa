import React, { Component } from "react";
import PropTypes from "prop-types";

class Transactions extends Component {
  render() {
    return (
      <div>
        <p>Trade</p>
        <select>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>Cost Basis</th>
              <th>Current Value</th>
              <th>Profit/Loss</th>
              <th>1d</th>
              <th>7d</th>
              <th>30d</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Cost Basis</th>
              <th>Current Value</th>
              <th>Profit/Loss</th>
              <th>1d</th>
              <th>7d</th>
              <th>30d</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Transactions;
