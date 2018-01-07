import { connect } from "react-redux";
import Trade from "../components/Trade";
import { setStock, updateQuantity } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    stock: state.fideligardStocks.stock,
    symbol: ownProps.match.params.symbol
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateQuantity: e => {
      dispatch(updateQuantity(e.target.value));
    },
    setStock: symbol => dispatch(setStock(symbol)),
    readOnly: e => {
      return undefined;
    }
  };
};

const TradeContainer = connect(mapStateToProps, mapDispatchToProps)(Trade);

export default TradeContainer;
