import { connect } from "react-redux";
import Trade from "../components/Trade";

const mapStateToProps = (state, ownProps) => {
  let stock;
  if (state.fideligard.stocks) {
    stock = state.fideligard.stocks.find(stock => {
      return stock.symbol == ownProps.match.params.symbol;
    });
  } else {
    stock = null;
  }
  let quantity = this.state
    ? this.state.quantity ? this.state.quantity : 100
    : 100;

  console.log("state");
  console.log(state);
  console.log("ownProps");
  console.log(ownProps);
  return {
    stock,
    quantity,
    symbol: ownProps.match.params.symbol
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

const TradeContainer = connect(mapStateToProps, mapDispatchToProps)(Trade);

export default TradeContainer;
