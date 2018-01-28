import { connect } from "react-redux";
import Transactions from "../components/Transactions";
import formatMoney from "../helpers/formatMoney";

const mapStateToProps = state => {
  let transactions = state.fideligardUser.transactions.map(transaction => {
    return { ...transaction, price: formatMoney(transaction.price) };
  });
  return { transactions };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const TransactionsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Transactions
);

export default TransactionsContainer;
