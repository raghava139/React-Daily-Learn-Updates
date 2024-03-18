import { FetchFailure, FetchRequest, FetchSuccess } from "./Action Type"


// Defining the API Request
export const fetchGetRequest = () => {
    return {
        type: FetchRequest
    }
}

//After success the api get response from these action
export const fetchSuccessRequest = (data) => {
    return {
        type: FetchSuccess,
        payload: data
    }
}

//If an Error The API Shows the failure request
export const fetchFailureRequest = (err) => {
    return {
        type: FetchFailure,
        payload: err
    }
}


export const fetchingTheWholeData = () => async (dispatchTheData) => {
    try {
        dispatchTheData(fetchGetRequest())
        const ResponseData = await fetch('https://jsonplaceholder.typicode.com/users');
        const JsonData = await ResponseData.json();
        dispatchTheData(fetchSuccessRequest(JsonData))
    }
    catch (error) {
        dispatchTheData(fetchFailureRequest(error))
    }
}
