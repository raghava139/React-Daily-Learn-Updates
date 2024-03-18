import axios from "axios"


export const Increment_creator = () => {
    return {
        type: "Increment"
    }
}
export const Decrement_creator = () => {
    return {
        type: "Decrement"
    }
}

//For Api Action Creator

export const Fetch_Request = (data) => {
    return {
        type: "Fetch_Requested",
    }
}

export const Fetch_Success = (data) => {
    return {
        type: "Fetch_SuccessD",
        payload: data
    }
}

export const Fetch_Failure = (err) => {
    return {
        type: "Fetch_Error",
        payload: err
    }
}

export const FetchAPIDataHere = () => {
    return async function (dispatch) {
        try {
            dispatch(Fetch_Request());
            const Response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch(Fetch_Success(Response?.data));
        }
        catch (err) {
            dispatch(Fetch_Failure(err?.message));
        }
    }
}