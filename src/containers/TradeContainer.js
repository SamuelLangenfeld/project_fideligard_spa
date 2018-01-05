import { connect } from "react-redux";
import Trade from "../components/Trade";

const mapStateToProps = state => {
  return {
    stocks: state.fideligard.stocks,
    quantity: state.quantity || 100
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateQuantity: e => {
      this.setState({
        quantity: e.target.value
      });
    }
  };
};

const StocksContainer = connect(mapStateToProps, mapDispatchToProps)(Stocks);

export default StocksContainer;
