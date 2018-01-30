import { connect } from "react-redux";
import Stocks from "../components/Stocks";
//import serialize from "form-serialize";
import { getStocks } from "../actions";
import { withRouter } from "react-router-dom";
import { setStock } from "../actions";
import formatMoney from "../helpers/formatMoney";
import PropTypes from "prop-types";

const mapStateToProps = (state, ownProps) => {
  let stocks = state.fideligardStocks.stocks.map(stock => {
    stock = { ...stock };
    stock.d1Price = formatMoney(stock.price - stock.d1Price);
    stock.d7Price = formatMoney(stock.price - stock.d7Price);
    stock.d30Price = formatMoney(stock.price - stock.d30Price);
    stock.price = formatMoney(stock.price);
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

StocksContainer.propTypes = {
  history: PropTypes.object
};

export default StocksContainer;
