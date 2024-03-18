import { combineReducers } from "redux";
import ReducerFunc from "./reducerFunc";

export const RootFileReducer = combineReducers({
    GetReducer: ReducerFunc
})
