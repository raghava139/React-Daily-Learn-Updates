import { combineReducers } from "redux";
import Reducer from "../Reducer/Reducer";
import Reducer22 from "../Reducer/Reducer2";

const RootReducer =combineReducers({
    firstReducer:Reducer,
    secondReducer:Reducer22,
})
export default RootReducer;