import fetch from "isomorphic-fetch";
export const GET_STOCKS_REQUEST = "GET_STOCKS_REQUEST";
export const GET_STOCKS_SUCCESS = "GET_STOCKS_SUCCESS";
export const GET_STOCKS_FAILURE = "GET_STOCKS_FAILURE";
export const SET_STOCK = "SET_STOCK";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const MAKE_TRANSACTION = "MAKE_TRANSACTION";
export const SET_TRANSACTION_TYPE = "SET_TRANSACTION_TYPE";
export const SET_DATE = "SET_DATE";
export const SET_DATE_INDEX = "SET_DATE_INDEX";

export function getStocksRequest() {
  return {
    type: GET_STOCKS_REQUEST
  };
}

export function getStocksSuccess(data) {
  return {
    type: GET_STOCKS_SUCCESS,
    data: data
  };
}

export function getStocksFailure(error) {
  return {
    type: GET_STOCKS_FAILURE,
    error: error
  };
}

export function setStock(data) {
  return {
    type: SET_STOCK,
    data
  };
}

export function updateQuantity(data) {
  return {
    type: UPDATE_QUANTITY,
    data
  };
}

export function makeTransaction(data) {
  return {
    type: MAKE_TRANSACTION,
    data
  };
}

export function setTransactionType(data) {
  return {
    type: SET_TRANSACTION_TYPE,
    data
  };
}

export function setDate(data) {
  return {
    type: SET_DATE,
    data
  };
}

export function getStocks() {
  return dispatch => {
    dispatch(getStocksRequest());
    let server =
      process.env.NODE_ENV === "production"
        ? "http://historic-stock-portfolio.herokuapp.com"
        : "http://localhost:3001";
    fetch(`${server}/apiCall`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch(getStocksSuccess(json));
      })
      .catch(e => {
        console.log(e);
        dispatch(getStocksFailure(e));
      });
  };
}

export function setDateIndex(data) {
  return {
    type: SET_DATE_INDEX,
    data
  };
}
