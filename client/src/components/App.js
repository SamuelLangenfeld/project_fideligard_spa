import React from "react";
import StocksContainer from "../containers/StocksContainer";
import ActionPanelContainer from "../containers/ActionPanelContainer";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarContainer from "../containers/NavbarContainer";
import PropTypes from "prop-types";
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
              <ActionPanelContainer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

App.propTypes = {
  balance: PropTypes.string
};
export default App;
