import { combineReducers } from "redux";
import * as Actions from "./actions";

let initialStockState = { stocks: [], stock: {} };
let initialUserState = { transactions: [], balance: 100000, portfolio: [] };

export function fideligardStocks(state = initialStockState, action) {
  switch (action.type) {
    case Actions.GET_STOCKS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_STOCKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        stocks: action.data
      };

    case Actions.GET_STOCKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case Actions.SET_STOCK:
      let stock = state.stocks.find(stock => {
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
          cost: (Number(state.stock.price) * quantity).toFixed(2)
        }
      };

    default:
      return state;
  }
}

export function fideligardUser(state = initialUserState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const fideligardApp = combineReducers({
  fideligardStocks,
  fideligardUser
});
