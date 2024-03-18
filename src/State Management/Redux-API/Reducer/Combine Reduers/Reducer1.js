
const initialState = {
    count: 0
}

export const  ReducerFunc = (state = initialState, action) => {
    console.log('action',action);
    switch (action.type) {
        case "Increment":
            return {
                ...state,
                count: state.count + 1
            }
        case "Decrement":
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return {
                ...state,
                count: 0
            }
    }
}