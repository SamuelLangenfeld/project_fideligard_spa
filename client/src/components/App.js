import React from "react";
import StocksContainer from "../containers/StocksContainer";
import MainContainer from "../containers/MainContainer";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarContainer from "../containers/NavbarContainer";
import "../App.css";

const App = props => {
  return (
    <Router>
      <div className="App">
        <NavbarContainer />
        <div className="container-width">
          <div className="route-display">Remaining Cash: {props.balance}</div>
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
