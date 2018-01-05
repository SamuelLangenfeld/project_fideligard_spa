import React, { Component } from "react";
import StocksContainer from "../containers/StocksContainer";
import Main from "./Main";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="NavLinks">
            <NavLink activeClassName="active" exact to="/trade/aapl">
              Trade
            </NavLink>{" "}
            <NavLink activeClassName="active" exact to="/portfolio/">
              Portfolio
            </NavLink>{" "}
            <NavLink activeClassName="active" to="/transaction">
              Transactions
            </NavLink>
          </div>

          <StocksContainer />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
