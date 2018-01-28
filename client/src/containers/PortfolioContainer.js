import { connect } from "react-redux";
import Portfolio from "../components/Portfolio";
import formatMoney from "../helpers/formatMoney";

const mapStateToProps = state => {
  let moneySpent = state.fideligardUser.moneySpent;
  let value = 0;
  let totald1Profit = 0;
  let totald7Profit = 0;
  let totald30Profit = 0;
  let stocks = state.fideligardStocks.stocks;
  let portfolioStocks = [];
  let portfolio = state.fideligardUser.portfolio
    ? { ...state.fideligardUser.portfolio }
    : {};
  stocks.forEach(originalStock => {
    if (portfolio[originalStock.symbol]) {
      let stock = { ...originalStock };
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
      stock.profit = stock.price - stock.costBasis;

      stock.costBasis = formatMoney(stock.costBasis);
      stock.value = formatMoney(stock.value);
      stock.profit = formatMoney(stock.profit);
      stock.price = formatMoney(stock.price);
      stock.d1Profit = formatMoney(stock.d1Profit);
      stock.d7Profit = formatMoney(stock.d7Profit);
      stock.d30Profit = formatMoney(stock.d30Profit);
      portfolioStocks.push(stock);
    }
  });
  let profit = value - moneySpent + state.fideligardUser.moneyGained;
  //totald1Profit = d1Value - moneySpent

  return {
    moneySpent: formatMoney(moneySpent),
    value: formatMoney(value),
    profit: formatMoney(profit),
    totald1Profit: formatMoney(totald1Profit),
    totald7Profit: formatMoney(totald7Profit),
    totald30Profit: formatMoney(totald30Profit),
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
