import { combineReducers } from "redux";
import * as Actions from "./actions";
const moment = require("moment");

let initialStockState = {
  stocks: [],
  transactionType: "BUY",
  symbol: "aapl",
  date: "2018-01-05"
};
let initialUserState = {
  transactions: [],
  balance: 100000,
  portfolio: [],
  moneySpent: 0
};

export function fideligardStocks(state = initialStockState, action) {
  switch (action.type) {
    case Actions.GET_STOCKS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case Actions.GET_STOCKS_SUCCESS:
      let fullData = action.data.map(result => {
        let data = result.dataset_data.data;
        data = data.map(data => {
          return { date: data[0], price: Number(data[4]) };
        });
        return { symbol: result.symbol, data };
      });
      let stocks = action.data.map(result => {
        return {
          symbol: result.symbol,
          price: Number(result.dataset_data.data[0][4]),
          d1Price: Number(result.dataset_data.data[1][4]),
          d7Price: Number(result.dataset_data.data[6][4]),
          d30Price: Number(result.dataset_data.data[29][4])
        };
      });
      return {
        ...state,
        isFetching: false,
        historicalStocks: fullData,
        stocks
      };

    case Actions.GET_STOCKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case Actions.SET_STOCK:
      let stock = state.stocks.find(stock => {
        if (stock.symbol === action.data) {
        }
        return stock.symbol === action.data;
      });
      stock = { ...stock, quantity: 100, cost: stock.price * 100 };
      return {
        ...state,
        stock
      };

    case Actions.UPDATE_QUANTITY:
      let quantity = Number(action.data);
      return {
        ...state,
        stock: {
          ...state.stock,
          quantity: quantity,
          cost: state.stock.price * quantity
        }
      };

    case Actions.SET_TRANSACTION_TYPE:
      return {
        ...state,
        transactionType: action.data
      };

    case Actions.SET_DATE:
      let maxDate = new Date("2018-1-5");
      if (new Date(action.data) > maxDate) {
        action.data = "2018-01-05";
      }

      let startDate = moment(action.data, "YYYY-MM-DD").format("YYYY-MM-DD");
      let d1 = moment(action.data, "YYYY-MM-DD")
        .subtract(1, "days")
        .format("YYYY-MM-DD");

      let d7 = moment(action.data, "YYYY-MM-DD")
        .subtract(7, "days")
        .format("YYYY-MM-DD");
      let d30 = moment(action.data, "YYYY-MM-DD")
        .subtract(30, "days")
        .format("YYYY-MM-DD");

      stocks = state.historicalStocks.map(stock => {
        let symbol = stock.symbol;
        let sameDayData = stock.data.find(el => {
          return el.date == startDate;
        });
        let price = sameDayData ? sameDayData.price : "x";

        let d1Data = stock.data.find(el => {
          return el.date === d1;
        });
        let d1Price = d1Data ? d1Data.price : "x";

        let d7Data = stock.data.find(el => {
          return el.date === d7;
        });
        let d7Price = d7Data ? d7Data.price : "x";

        let d30Data = stock.data.find(el => {
          return el.date === d30;
        });
        let d30Price = d30Data ? d30Data.price : "x";

        //update stock.price based on date

        return { symbol, price, d1Price, d7Price, d30Price };
      });

      return {
        ...state,
        date: action.data,
        stocks
      };

    default:
      return state;
  }
}

export function fideligardUser(state = initialUserState, action) {
  switch (action.type) {
    case Actions.MAKE_TRANSACTION:
      //portfolio: {"aapl": 50, "vz":10}
      let portfolio = { ...state.portfolio };
      let transactions = state.transactions.slice(0);
      transactions.push({
        ...action.data
      });
      let quantity = Number(action.data.quantity);
      if (action.data.type === "SELL") {
        quantity = -1 * quantity;
      }
      if (portfolio[action.data.symbol]) {
        portfolio[action.data.symbol] += quantity;
      } else {
        portfolio[action.data.symbol] = quantity;
      }

      let balance = state.balance - action.data.price * quantity;
      let moneySpent = state.moneySpent + action.data.price * quantity;

      return {
        ...state,
        portfolio,
        transactions,
        balance,
        moneySpent
      };
    default:
      return state;
  }
}

export const fideligardApp = combineReducers({
  fideligardStocks,
  fideligardUser
});
