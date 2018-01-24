import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Fideligard Historical Portfolio Simulator
      </Link>
    </nav>
  );
};

export default Navbar;
