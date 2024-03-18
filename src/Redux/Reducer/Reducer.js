import React from 'react';
import { Fetch_Data_Failure, Fetch_Data_Request, Fetch_Data_Success } from '../Actions/Actions';



const initialState = {
    data: [],
    loading: false,
    error: null,
};

const Reducer = (state = initialState, action) => {
    // console.log('action',action)
    switch (action.type) {
        case Fetch_Data_Request:
            return {
                ...state, loading: true
            }
        case Fetch_Data_Success:
            return {
                ...state, loading: false, data: action.payload, error: null
            }
        case Fetch_Data_Failure:
            return {
                ...state, loading: false, data: [], error: action.payload
            }
        default:
            return state;
    }

}
export default Reducer;