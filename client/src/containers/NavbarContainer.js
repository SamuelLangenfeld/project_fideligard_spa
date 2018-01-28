import { connect } from "react-redux";
import Navbar from "../components/Navbar";

const mapStateToProps = state => {
  let symbol = state.fideligardStocks.stock
    ? state.fideligardStocks.stock.symbol
    : "aapl";
  return { symbol };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
