import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import TradeContainer from "../containers/TradeContainer";
import TransactionsContainer from "../containers/TransactionsContainer";
import PortfolioContainer from "../containers/PortfolioContainer";

const Main = props => {
  if (props.isFetching) {
    return <h2>Loading Historical Data</h2>;
  }
  return (
    <div>
      <input
        type="date"
        min="1988-1-1"
        max="2018-1-5"
        onChange={props.dateChange}
        value={props.date}
      />
      <div>
        <div className="route-display">{props.path}</div>
        <select
          onChange={props.selectRoute}
          symbol={props.symbol}
          value={props.path}
          className="route-select"
        >
          <option>Portfolio</option>
          <option>Trade</option>
          <option>Transactions</option>
        </select>
      </div>

      <Switch>
        {props.redirect ? <Redirect to="/" /> : null}
        <Route exact path="/" component={PortfolioContainer} />
        <Route exact path="/trade/:symbol" component={TradeContainer} />
        <Route exact path="/portfolio/" component={PortfolioContainer} />
        <Route exact path="/transactions/" component={TransactionsContainer} />
        <Route render={null} />
      </Switch>
    </div>
  );
};
export default Main;

Main.propTypes = {
  selectRoute: PropTypes.func,
  symbol: PropTypes.string,
  redirect: PropTypes.bool
};
