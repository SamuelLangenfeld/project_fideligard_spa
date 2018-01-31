import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import TradeContainer from "../containers/TradeContainer";
import TransactionsContainer from "../containers/TransactionsContainer";
import PortfolioContainer from "../containers/PortfolioContainer";

const ActionPanel = props => {
  if (props.isFetching) {
    return <h2>Loading Historical Data...</h2>;
  }
  return (
    <div>
      <div className="route-display">Date: {props.dates[props.dateIndex]}</div>
      <div className="slide-container">
        <input
          type="range"
          min="0"
          max={props.dates.length - 1}
          value={props.dateIndex}
          onChange={props.setDateIndex}
          className="slider"
          id="myRange"
          step={1}
        />
      </div>

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

ActionPanel.propTypes = {
  selectRoute: PropTypes.func,
  symbol: PropTypes.string,
  redirect: PropTypes.bool,
  isFetching: PropTypes.bool,
  path: PropTypes.string,
  dates: PropTypes.array,
  setDateIndex: PropTypes.func,
  dateIndex: PropTypes.number
};

export default ActionPanel;
