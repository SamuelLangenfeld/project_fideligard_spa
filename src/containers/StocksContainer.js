import { connect } from "react-redux";
import Stocks from "../components/Stocks";
//import serialize from "form-serialize";
//import { getGoodreads, getGoodreadsBook, clearBook } from "../actions";

const mapStateToProps = state => {
  return { stocks: state.fideligard.stocks };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const StocksContainer = connect(mapStateToProps, mapDispatchToProps)(Stocks);

export default StocksContainer;
