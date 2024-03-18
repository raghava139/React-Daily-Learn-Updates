import { combineReducers } from "redux";
import { ReducerFunc } from "./Reducer1";
import { Reducer2 } from "./Reducer2";

const CombineReds= combineReducers({
    firstReducer:ReducerFunc,
    secondReducer:Reducer2
})

export default CombineReds