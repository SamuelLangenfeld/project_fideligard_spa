//import apiKey from "./config";
//import fetch from "isomorphic-fetch";
const stockInfo = require("./stockInfo.json");

export const GET_STOCKS_REQUEST = "GET_STOCKS_REQUEST";
export const GET_STOCKS_SUCCESS = "GET_STOCKS_SUCCESS";
export const GET_STOCKS_FAILURE = "GET_STOCKS_FAILURE";
export const SET_STOCK = "SET_STOCK";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const MAKE_TRANSACTION = "MAKE_TRANSACTION";
export const SET_TRANSACTION_TYPE = "SET_TRANSACTION_TYPE";

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

export function getStocks() {
  return dispatch => {
    let results = stockInfo.map((result, i) => {
      return {
        symbol: result.symbol,
        price: result.dataset_data.data[0][4].toFixed(2),
        d1Price: (
          result.dataset_data.data[1][4] - result.dataset_data.data[0][4]
        ).toFixed(2),
        d7Price: (
          result.dataset_data.data[6][4] - result.dataset_data.data[0][4]
        ).toFixed(2),
        d30Price: (
          result.dataset_data.data[29][4] - result.dataset_data.data[0][4]
        ).toFixed(2)
      };
    });
    dispatch(getStocksSuccess(results));

    /*
    let symbols = [
      "aapl",
      "tsla",
      "amzn",
      "fb",
      "goog",
      "twtr",
      "t",
      "vz",
      "ge",
      "orcl"
    ];
    dispatch(getStocksRequest());

    let promiseArray = [];
    let time = 1;

    symbols.forEach(symbol => {
      time += 500;
      promiseArray.push(
        new Promise((res, rej) => {
          setTimeout(() => {
            fetch(
              `https://www.quandl.com/api/v3/datasets/WIKI/${symbol}/data.json?trim_start=2016-01-01&api_key=${apiKey}`
            )
              .then(results => results.json())
              .then(results => res(results));
          }, time);
        })
      );
    });

    Promise.all(promiseArray)
      .then(results => {
        results.forEach((result, i) => {
          result.symbol = symbols[i];
        });
        console.log("RECEIVED RESULTS");
        results = results.map((result, i) => {
          return {
            symbol: symbols[i],
            price: result.dataset_data.data[0][4],
            d1Price: result.dataset_data.data[1][4],
            d7Price: result.dataset_data.data[6][4],
            d30Price: result.dataset_data.data[29][4]
          };
        });



        dispatch(getStocksSuccess(results));
      })
      .catch(e => {
        dispatch(getStocksFailure(e));
      });

      */
  };
}
