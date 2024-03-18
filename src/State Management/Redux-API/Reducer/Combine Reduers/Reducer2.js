const initialState2 = {
    data: [],
    loading: false,
    error: ""
}

export const Reducer2 = (state = initialState2, action) => {
    switch (action.type) {
        case "Fetch_Requested":
            return {
                ...state,
                data: [],
                error: "",
                loading: true
            }
        case "Fetch_SuccessD":
            return {
                ...state,
                data: action.payload,
                error: "",
                loading: false
            }
        case "Fetch_Error":
            return {
                ...state,
                data: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
            break;
    }
}