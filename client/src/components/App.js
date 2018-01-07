import React, { Component } from "react";
import StocksContainer from "../containers/StocksContainer";
import MainContainer from "../containers/MainContainer";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "../App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="NavLinks">
              <NavLink activeClassName="active" exact to="/trade/appl">
                Trade
              </NavLink>{" "}
              <NavLink activeClassName="active" exact to="/portfolio">
                Portfolio
              </NavLink>{" "}
              <NavLink activeClassName="active" to="/transaction">
                Transactions
              </NavLink>
            </div>
            <div className="row">
              <div className="col-md-6">
                <StocksContainer />
              </div>
              <div className="col-md-6">
                <MainContainer />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
