import React from "react";
//import PropTypes from "prop-types";

const Transactions = props => {
  let transactionsTable;
  if (props.transactions && props.transactions.length > 0) {
    transactionsTable = (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Symbol</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.transactions.map((transaction, i) => {
            return (
              <tr key={i}>
                <td>{transaction.date}</td>
                <td>{transaction.symbol}</td>
                <td>{transaction.type}</td>
                <td>{transaction.quantity}</td>
                <td>${transaction.price.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    transactionsTable = (
      <div>
        <br />
        <br />
        <h4>
          You haven't made any transactions at all. Ever. Get it together.
        </h4>
      </div>
    );
  }

  return <div>{transactionsTable}</div>;
};

export default Transactions;
