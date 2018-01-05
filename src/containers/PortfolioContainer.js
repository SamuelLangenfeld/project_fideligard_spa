import { connect } from "react-redux";
import Stocks from "../components/Stocks";
//import serialize from "form-serialize";
import { getStocks } from "../actions";
import Portfolio from "../components/Portfolio";

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {};
};

const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps)(
  Portfolio
);

export default PortfolioContainer;
