import { connect } from "react-redux";
import Trade from "../components/Trade";
import {
  setStock,
  updateQuantity,
  setTransactionType,
  makeTransaction
} from "../actions";

const mapStateToProps = (state, ownProps) => {
  let portfolio = state.fideligardUser.portfolio;

  let orderStatus = true;
  if (state.fideligardStocks.stock) {
    orderStatus =
      state.fideligardUser.balance > state.fideligardStocks.stock.cost;
  }

  return {
    stock: state.fideligardStocks.stock,
    symbol: ownProps.match.params.symbol,
    balance: state.fideligardUser.balance,
    orderStatus,
    portfolio,
    transactionType: state.fideligardStocks.transactionType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateQuantity: e => {
      dispatch(updateQuantity(e.target.value));
    },
    setStock: symbol => dispatch(setStock(symbol)),
    readOnly: e => {
      return undefined;
    },

    setTransactionType: e => {
      if (typeof e === "string") {
        return dispatch(setTransactionType(e));
      }
      if (e.target.value === "BUY") {
        dispatch(setTransactionType("BUY"));
      } else {
        dispatch(setTransactionType("SELL"));
      }
    },

    confirmTrade: e => {
      e.preventDefault();
      let form = e.target.parentNode.parentNode;
      console.log(form);
      dispatch(
        makeTransaction({
          date: form.date.value,
          symbol: form.symbol.value,
          price: form.price.value,
          quantity: form.quantity.value,
          type: form.type.value
        })
      );
    },

    invalidTrade: e => {
      e.preventDefault();
      alert("Invalid Trade");
    }
  };
};

const TradeContainer = connect(mapStateToProps, mapDispatchToProps)(Trade);

export default TradeContainer;
