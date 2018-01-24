import { connect } from "react-redux";
import Portfolio from "../components/Portfolio";

const mapStateToProps = state => {
  let moneySpent = state.fideligardUser.moneySpent.toFixed(2);
  let value = 0;
  let totald1Profit = 0;
  let totald7Profit = 0;
  let totald30Profit = 0;
  let stocks = [...state.fideligardStocks.stocks];
  let portfolioStocks = [];
  let portfolio = state.fideligardUser.portfolio;
  stocks.forEach(stock => {
    if (portfolio[stock.symbol]) {
      value += stock.price * portfolio[stock.symbol];
      totald1Profit += (stock.price - stock.d1Price) * portfolio[stock.symbol];
      totald7Profit += (stock.price - stock.d7Price) * portfolio[stock.symbol];
      totald30Profit +=
        (stock.price - stock.d30Price) * portfolio[stock.symbol];
      stock.d1Profit = stock.price - stock.d1Price;
      stock.d7Profit = stock.price - stock.d7Price;
      stock.d30Profit = stock.price - stock.d30Price;
      stock.quantity = portfolio[stock.symbol];
      stock.costBasis = stock.price * stock.quantity;
      stock.value = stock.price * stock.quantity;
      stock.profit = 0; //until i implement past buying
      portfolioStocks.push(stock);
    }
  });
  let profit = (value - moneySpent).toFixed(2);
  //totald1Profit = d1Value - moneySpent
  value = value.toFixed(2);
  totald1Profit = totald1Profit.toFixed(2);
  totald7Profit = totald7Profit.toFixed(2);
  totald30Profit = totald30Profit.toFixed(2);

  return {
    moneySpent,
    value,
    profit,
    totald1Profit,
    totald7Profit,
    totald30Profit,
    portfolioStocks
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps)(
  Portfolio
);

export default PortfolioContainer;
