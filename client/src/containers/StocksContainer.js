import { connect } from "react-redux";
import Stocks from "../components/Stocks";
//import serialize from "form-serialize";
import { getStocks } from "../actions";
import { withRouter } from "react-router-dom";
import { setStock } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, stocks: state.fideligardStocks.stocks };
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
