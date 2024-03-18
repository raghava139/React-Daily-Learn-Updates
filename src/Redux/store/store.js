import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import RootReducer from "../RootReducer/RootReducer";

const Store = createStore(RootReducer,applyMiddleware(thunk))
export default Store;