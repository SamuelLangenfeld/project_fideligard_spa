import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import TradeContainer from "../containers/TradeContainer";
import TransactionsContainer from "../containers/TransactionsContainer";
import PortfolioContainer from "../containers/PortfolioContainer";

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <select
            onChange={this.props.selectRoute}
            symbol={this.props.symbol}
            value={this.props.path}
            className="route-select"
          >
            <option>Portfolio</option>
            <option>Trade</option>
            <option>Transactions</option>
          </select>
          <strong className="route-display">{this.props.path}</strong>
        </div>

        <Switch>
          {this.props.redirect ? <Redirect to="/" /> : null}
          <Route exact path="/" component={PortfolioContainer} />
          <Route exact path="/trade/:symbol" component={TradeContainer} />
          <Route exact path="/portfolio/" component={PortfolioContainer} />
          <Route
            exact
            path="/transactions/"
            component={TransactionsContainer}
          />
          <Route render={null} />
        </Switch>
      </div>
    );
  }
}
export default Main;

Main.propTypes = {
  selectRoute: PropTypes.func,
  symbol: PropTypes.string,
  redirect: PropTypes.bool
};
