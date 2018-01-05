import apiKey from "./config";
import fetch from "isomorphic-fetch";

export const GET_STOCKS_REQUEST = "GET_STOCKS_REQUEST";
export const GET_STOCKS_SUCCESS = "GET_STOCKS_SUCCESS";
export const GET_STOCKS_FAILURE = "GET_STOCKS_FAILURE";

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

export function getStocks() {
  return dispatch => {
    console.log("making dispatch");
    let symbols = [
      "aapl"
      // "tsla",
      // "amzn",
      // "nlfx",
      // "fb",
      // "goog",
      // "twtr",
      // "t",
      // "vz",
      // "ge"
    ];
    dispatch(getStocksRequest());

    let promiseArray = [];

    symbols.forEach(symbol => {
      promiseArray.push(
        fetch(
          `https://www.quandl.com/api/v3/datasets/WIKI/${symbol}/data.json?api_key=${apiKey}`
        ).then(results => results.json())
      );
    });

    Promise.all(promiseArray)
      .then(results => {
        console.log("results =>", results);
        results = results.map((result, i) => {
          return {
            name: symbols[i],
            price: result.dataset_data.data[0][4],
            d1Price: result.dataset_data.data[1][4],
            d7Price: result.dataset_data.data[6][4],
            d30Price: result.dataset_data.data[29][4]
          };
        });
        console.log("results => ", results);
        dispatch(getStocksSuccess(results));
      })
      .catch(e => {
        dispatch(getStocksFailure(e));
      });
  };
}
