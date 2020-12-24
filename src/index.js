import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {createStore} from "redux";
//actions
const increment = (value = 1) => {
    return {type: "INCREMENT", payload: value};
};
const decrement = (value = 1) => {
    return {type: "DECREMENT", payload: value};
};

//reducers
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case increment().type:
            return state + action.payload;
        case decrement().type:
            return state - action.payload;
        default:
            return state;
    }
};
//Create store
let store = createStore(counterReducer);
//Display
store.subscribe(() => {
    console.log(store.getState());
});
//Dispatch the actions
store.dispatch(increment(2));
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
