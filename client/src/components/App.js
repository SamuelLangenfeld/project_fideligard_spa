import React from "react";
import StocksContainer from "../containers/StocksContainer";
import MainContainer from "../containers/MainContainer";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import "../App.css";

const App = props => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container-width">
          <div className="NavLinks">
            <NavLink activeClassName="active" exact to="/trade/aapl">
              Trade
            </NavLink>{" "}
            <NavLink activeClassName="active" exact to="/portfolio">
              Portfolio
            </NavLink>{" "}
            <NavLink activeClassName="active" to="/transaction">
              Transactions
            </NavLink>{" "}
            <span>Remaining Cash: ${props.balance.toFixed(2)}</span>
          </div>
          <div className="row">
            <div className="col-md-5">
              <StocksContainer />
            </div>
            <div className="col-md-7">
              <MainContainer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
