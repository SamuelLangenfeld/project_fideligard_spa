import { connect } from "react-redux";
import Main from "../components/Main";
//import serialize from "form-serialize";
import { withRouter } from "react-router-dom";

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

  return {
    stocks: state.fideligardStocks.stocks,
    redirect,
    symbol,
    path
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
    }
  };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default withRouter(MainContainer);
