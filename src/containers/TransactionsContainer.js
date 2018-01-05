import { connect } from "react-redux";
import Stocks from "../components/Stocks";
//import serialize from "form-serialize";
import { getStocks } from "../actions";
import Transactions from "../components/Transactions";

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {};
};

const TransactionsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Transactions
);

export default TransactionsContainer;
