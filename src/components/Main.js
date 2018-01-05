import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import TradeContainer from "../containers/TradeContainer";
import TransactionsContainer from "../containers/TransactionsContainer";
import PortfolioContainer from "../containers/PortfolioContainer";

const Main = () => {
  <Router>
    <select>
      <option>Trade</option>
    </select>

    <Switch>
      <Route exact path="/trade/:id" component={TradeContainer} />
      <Route exact path="/portfolio/" component={PortfolioContainer} />
      <Route exact path="/transactions/" component={TransactionsContainer} />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  </Router>;
};
