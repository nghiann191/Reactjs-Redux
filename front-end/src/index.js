import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
<<<<<<< HEAD
import {Provider} from 'react-redux';
import { createStore } from "redux";

function rootRedux(){
    
}
const store = createStore(rootRedux);
=======
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
>>>>>>> 993e3665... chinh sua css
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));