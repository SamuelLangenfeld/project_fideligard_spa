import { connect } from "react-redux";
import Main from "../components/Main";
import { withRouter } from "react-router-dom";
import { setDate, setDateIndex } from "../actions";
import PropTypes from "prop-types";

const mapStateToProps = (state, ownProps) => {
  let redirect =
    ownProps.location.pathname !== "/" &&
    (!state.fideligardStocks.stocks ||
      state.fideligardStocks.stocks.length <= 0);
  let symbol = state.fideligardStocks.stock
    ? state.fideligardStocks.stock.symbol
    : "aapl";

  let path;
  switch (true) {
    case /trade/.test(ownProps.location.pathname):
      path = "Trade";
      break;
    case /transactions/.test(ownProps.location.pathname):
      path = "Transactions";
      break;
    default:
      path = "Portfolio";
  }

  let dates = state.fideligardStocks.dates ? state.fideligardStocks.dates : [];
  let dateIndex = state.fideligardStocks.dateIndex
    ? state.fideligardStocks.dateIndex
    : 0;
  return {
    isFetching: state.fideligardStocks.isFetching,
    stocks: state.fideligardStocks.stocks,
    redirect,
    symbol,
    path,
    balance: state.fideligardUser.balance,
    date: state.fideligardStocks.date,
    dates,
    dateIndex
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectRoute: e => {
      switch (e.target.value) {
        case "Trade":
          return ownProps.history.push(
            `/trade/${e.target.getAttribute("symbol")}`
          );
        case "Portfolio":
          return ownProps.history.push(`/portfolio`);
        case "Transactions":
          return ownProps.history.push(`/transactions`);
        default:
          return ownProps.history.push("/");
      }
    },

    dateChange: e => {
      dispatch(setDate(e.target.value));
    },

    setDateIndex: e => {
      dispatch(setDateIndex(e.target.value));
    }
  };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

MainContainer.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
};

export default withRouter(MainContainer);
