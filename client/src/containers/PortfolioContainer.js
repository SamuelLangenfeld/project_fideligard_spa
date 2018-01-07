import { connect } from "react-redux";
import Portfolio from "../components/Portfolio";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps)(
  Portfolio
);

export default PortfolioContainer;
