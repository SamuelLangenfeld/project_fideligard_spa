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
  let stock = state.fideligardStocks.stock;

  let orderStatus = true;

  if (stock) {
    switch (state.fideligardStocks.transactionType) {
      case "BUY":
        orderStatus = state.fideligardUser.balance > stock.cost;
        break;
      case "SELL":
        console.log("portfolio[stock.symbol]=>", portfolio[stock.symbol]);
        orderStatus = portfolio[stock.symbol] >= stock.quantity;
        break;
      default:
        orderStatus = true;
    }
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

const mapDispatchToProps = (dispatch, ownProps) => {
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
      dispatch(
        makeTransaction({
          date: form.date.value,
          symbol: form.symbol.value,
          price: Number(form.price.value),
          quantity: Number(form.quantity.value),
          type: form.type.value
        })
      );

      ownProps.history.push("/transactions");
    },

    invalidTrade: e => {
      e.preventDefault();
      alert("Invalid Trade");
    }
  };
};

const TradeContainer = connect(mapStateToProps, mapDispatchToProps)(Trade);

export default TradeContainer;
