import { connect } from "react-redux";
import Stocks from "../components/Stocks";
//import serialize from "form-serialize";
import { getStocks } from "../actions";

const mapStateToProps = state => {
  return { stocks: state.fideligard.stocks };
};

const mapDispatchToProps = dispatch => {
  return {
    getStocks: () => {
      dispatch(getStocks());
    }
  };
};

const StocksContainer = connect(mapStateToProps, mapDispatchToProps)(Stocks);

export default StocksContainer;
