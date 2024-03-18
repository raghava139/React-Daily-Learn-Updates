import React from 'react';
import { Fetch_Data_Failure2, Fetch_Data_Request2, Fetch_Data_Success2 } from '../Actions/Actions';




const initialState2 = {
    data: [],
    loading: false,
    error: null,
};

const Reducer22 = (state = initialState2, action) => {
    // console.log('actions2',action)
    switch (action.type) {
        case Fetch_Data_Request2:
            return {
                ...state, loading: true
            }
        case Fetch_Data_Success2:
            return {
                ...state, loading: false, data: action.payload, error: null
            }
        case Fetch_Data_Failure2:
            return {
                ...state, loading: false, data: [], error: action.payload
            }
        default:
            return state;
    }

}
export default Reducer22;