import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="navbar-brand mr-auto">
        Historic Portfolio Simulator
      </Link>
      <Link to="/trade/aapl" className="navbar-brand">
        Trade
      </Link>
      <Link to="/portfolio" className="navbar-brand">
        Portfolio
      </Link>
      <Link to="/transactions" className="navbar-brand">
        Transactions
      </Link>
    </nav>
  );
};

export default Navbar;
