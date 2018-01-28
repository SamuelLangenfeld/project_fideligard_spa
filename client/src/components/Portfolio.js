import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";

const Portfolio = props => {
  let portfolioStocks = props.portfolioStocks.map(stock => {
    return (
      <tr key={stock.symbol}>
        <td>{stock.symbol}</td>
        <td>{stock.quantity}</td>
        <td>{stock.costBasis}</td>
        <td>{stock.value}</td>
        <td>{stock.profit}</td>
        <td>{stock.price}</td>
        <td>{stock.d1Profit}</td>
        <td>{stock.d7Profit}</td>
        <td>{stock.d30Profit}</td>
        <td>
          <Link to={`/trade/${stock.symbol}`}>Trade</Link>
        </td>
      </tr>
    );
  });

  let portfolioTable;
  if (portfolioStocks.length > 0) {
    portfolioTable = (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Cost Basis</th>
            <th>Current Value</th>
            <th>Profit/Loss</th>
            <th>Current Price</th>
            <th>1d</th>
            <th>7d</th>
            <th>30d</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>{portfolioStocks}</tbody>
      </table>
    );
  } else {
    portfolioTable = <h2>Your portfolio is empty. Get trading!</h2>;
  }

  return (
    <div>
      <table className="table table-bordered table-striped">
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
            <td>{props.moneySpent}</td>
            <td>{props.value}</td>
            <td>{props.profit}</td>
            <td>{props.totald1Profit}</td>
            <td>{props.totald7Profit}</td>
            <td>{props.totald30Profit}</td>
          </tr>
        </tbody>
      </table>
      {portfolioTable}
    </div>
  );
};

export default Portfolio;
