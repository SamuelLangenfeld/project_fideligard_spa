import React from "react";
import { connect } from "react-redux";
import Stocks from "../components/Stocks";
//import serialize from "form-serialize";
import { getStocks } from "../actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return { stocks: state.fideligard.stocks };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getStocks: () => {
      dispatch(getStocks());
    },
    redirect: () => {
      console.log("own props => ", ownProps);
      ownProps.history.push("/trade/aapl");
    }
  };
};

const StocksContainer = connect(mapStateToProps, mapDispatchToProps)(Stocks);

export default withRouter(StocksContainer);
