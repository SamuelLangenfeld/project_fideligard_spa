import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
  withRouter,
  Redirect
} from "react-router-dom";
import TradeContainer from "../containers/TradeContainer";
import TransactionsContainer from "../containers/TransactionsContainer";
import PortfolioContainer from "../containers/PortfolioContainer";
import StocksContainer from "../containers/StocksContainer";

const Main = props => (
  <div className="container">
    <select onChange={props.selectRoute} symbol={props.symbol}>
      <option>Trade</option>
      <option>Portfolio</option>
      <option>Transactions</option>
    </select>

    <Switch>
      {props.redirect ? <Redirect to="/" /> : null}
      <Route exact path="/" render={null} />
      <Route exact path="/trade/:symbol" component={TradeContainer} />
      <Route exact path="/portfolio/" component={PortfolioContainer} />
      <Route exact path="/transactions/" component={TransactionsContainer} />
      <Route render={null} />
    </Switch>
  </div>
);

export default Main;
