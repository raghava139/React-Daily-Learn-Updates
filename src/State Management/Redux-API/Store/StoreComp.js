import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import CombineReds from "../Reducer/Combine Reduers/CombineRed";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
export const StoreComponent = legacy_createStore(CombineReds,composeWithDevTools(applyMiddleware(thunk)));