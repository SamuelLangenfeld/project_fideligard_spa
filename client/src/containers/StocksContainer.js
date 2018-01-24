import { connect } from "react-redux";
import Stocks from "../components/Stocks";
//import serialize from "form-serialize";
import { getStocks } from "../actions";
import { withRouter } from "react-router-dom";
import { setStock } from "../actions";

const mapStateToProps = (state, ownProps) => {
  let stocks = state.fideligardStocks.stocks.map(stock => {
    stock = { ...stock };
    stock.d1Price = (stock.price - stock.d1Price).toFixed(2);
    stock.d7Price = (stock.price - stock.d7Price).toFixed(2);
    stock.d30Price = (stock.price - stock.d30Price).toFixed(2);
    return stock;
  });
  return { ...ownProps, stocks };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getStocks: () => {
      dispatch(getStocks());
    },
    setStock: e => {
      e.preventDefault();
      let symbol = e.target.getAttribute("symbol");
      dispatch(setStock(symbol));
      ownProps.history.push(`/trade/${symbol}`);
    }
  };
};

const StocksContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Stocks)
);

export default StocksContainer;
