import { combineReducers } from "redux";
import * as Actions from "./actions";

let initialState = { stocks: [{}], stock: {} };

export function fideligard(state = initialState, action) {
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
      let stock = state.stocks.find(stock => stock.symbol === action.data);
      return {
        ...state,
        stock
      };

    case Actions.UPDATE_QUANTITY:
      return {
        ...state,
        stock: { ...state.stock, quantity: action.data }
      };

    default:
      return state;
  }
}

export const fideligardApp = combineReducers({
  fideligard
});
