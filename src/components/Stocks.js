import React from "react";
import PropTypes from "prop-types";

const Stocks = ({ stocks }) => {
  let stocksList = stocks.map(stock => {
    return (
      <tr>
        {" "}
        <td>{stock.symbol}</td>
        <td>{stock.price}</td>
        <td>{stock.d1Price}</td>
        <td>{stock.d7Price}</td>
        <td>{stock.d30Price}</td>
        <td>
          <a href="/trade">Trade?</a>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <th>Symbol</th>
        <th>Price</th>
        <th>1d</th>
        <th>7d</th>
        <th>30d</th>
        <th>Trade?</th>
      </thead>
      {stocksList}
    </table>
  );
};

Stocks.propTypes = {
  stocks: PropTypes.array
};

export default Stocks;
