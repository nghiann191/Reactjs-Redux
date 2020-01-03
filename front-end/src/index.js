import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import ReduxPromise from "redux-promise";

const store = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
  <Provider store={store(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
