import { combineReducers } from "redux";

let initialState = { stocks: [{}] };

export function fideligard(state = initialState, action) {
  return state;
}

export const fideligardApp = combineReducers({
  fideligard
});
