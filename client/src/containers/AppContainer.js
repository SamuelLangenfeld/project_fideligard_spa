import { connect } from "react-redux";
import App from "../components/App";
import formatMoney from "../helpers/formatMoney";

//import serialize from "form-serialize";
//import { getGoodreads, getGoodreadsBook, clearBook } from "../actions";

const mapStateToProps = state => {
  return { balance: formatMoney(state.fideligardUser.balance) };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
