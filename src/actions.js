import apiKey from "./config";

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

export function getStocks(query) {
  return dispatch => {
    let symbols = [
      "appl",
      "tsla",
      "amzn",
      "nlfx",
      "fb",
      "goog",
      "twtr",
      "t",
      "vz",
      "ge"
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
        dispatch(getStocksSuccess(results));
      })
      .catch(e => {
        dispatch(getStocksFailure(e));
      });
  };
}
