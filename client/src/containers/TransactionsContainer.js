import { connect } from "react-redux";
import Transactions from "../components/Transactions";

const mapStateToProps = state => {
  return { transactions: state.fideligardUser.transactions };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const TransactionsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Transactions
);

export default TransactionsContainer;
