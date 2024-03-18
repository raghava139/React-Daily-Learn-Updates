export const Fetch_Data_Request = 'Fetch_Data_Request';
export const Fetch_Data_Success = 'Fetch_Data_Success';
export const Fetch_Data_Failure = 'Fetch_Data_Failure';

export const Fetch_Data_Request2 = 'Fetch_Data_Request2';
export const Fetch_Data_Success2 = 'Fetch_Data_Success2';
export const Fetch_Data_Failure2 = 'Fetch_Data_Failure2';

export const fetchDataRequest = () => {
    return {
        type: Fetch_Data_Request,
    }
}

export const fetchDatasucess = (data) => {
    return {
        type: Fetch_Data_Success,
        payload: data
    }
}
export const fetchDatafailure = (error) => {
    return {
        type: Fetch_Data_Failure,
        payload: error
    }
}

export const fetchDataRequest2 = () => {
    return {
        type: Fetch_Data_Request2,
    }
}

export const fetchDatasucess2 = (data) => {
    return {
        type: Fetch_Data_Success2,
        payload: data
    }
}
export const fetchDatafailure2 = (error) => {
    return {
        type: Fetch_Data_Failure2,
        payload: error
    }
}


export const FetchAPI = () => {
    return async function (dispatch) {
        // console.log('dispatch ',dispatch)
        try{
            dispatch(fetchDataRequest())
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const GetDataJ = await response.json();
            dispatch(fetchDatasucess(GetDataJ))
        }
        catch(err){
            dispatch(fetchDatafailure(err))
            console.log('error',err)
        }
        
    }
}

export const FetchAPI2 = () => {
    return async function (dispatch) {
        // console.log('dispatch ',dispatch)
        const response = await fetch('https://dummyjson.com/products/1')
            const GetDataJ = await response.json();
        try{
            dispatch(fetchDataRequest2())
            dispatch({
                type: Fetch_Data_Success2,
                payload: GetDataJ
            })
        }
        catch(err){
            dispatch(fetchDatafailure2(err))
            console.log('error',err)
        }
        
    }
}