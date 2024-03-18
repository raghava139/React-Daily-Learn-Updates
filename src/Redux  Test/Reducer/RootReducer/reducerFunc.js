import { FetchFailure, FetchRequest, FetchSuccess } from "../../Actions/Action Type"


const initialState = {
    loading: false,
    data: [],
    error: null
}

const ReducerFunc = (state = initialState, action) => {
    switch (action.type) {
        case FetchRequest:
            return { ...state, loading: true }
        case FetchSuccess:
            return { ...state, loading: false, data: action.payload, error: null }
        case FetchFailure:
            return { ...state, loading: false, data: [], error: action.payload }
        default:
            return state;
    }
}
export default ReducerFunc;