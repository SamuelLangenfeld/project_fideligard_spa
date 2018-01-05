import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./containers/AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { fideligardApp } from "./reducers";
import thunk from "redux-thunk";

let store = createStore(fideligardApp, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
