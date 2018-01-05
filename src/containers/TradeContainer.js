import { connect } from "react-redux";
import Trade from "../components/Trade";
import { setStock, updateQuantity } from "../actions";

const mapStateToProps = (state, ownProps) => {
  console.log(state);

  return {
    stock: state.fideligard.stock,
    symbol: ownProps.match.params.symbol
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateQuantity: e => {
      dispatch(updateQuantity(e.target.value));
    }
  };
};

const TradeContainer = connect(mapStateToProps, mapDispatchToProps)(Trade);

export default TradeContainer;
