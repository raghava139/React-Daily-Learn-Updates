import { applyMiddleware, compose, legacy_createStore } from "redux";
import { RootFileReducer } from "../Reducer/RootReducer/RootRedFile";
import { thunk } from "redux-thunk";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const StoresData = legacy_createStore(RootFileReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ))
const StoresData = legacy_createStore(
    RootFileReducer,
    applyMiddleware(thunk)
)
export default StoresData;