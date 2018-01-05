import { combineReducers } from "redux";
import * as Actions from "./actions";

let initialState = { stocks: [{}] };

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

    default:
      return state;
  }
}

export const fideligardApp = combineReducers({
  fideligard
});
