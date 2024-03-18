import axios from "axios";
import { useEffect, useReducer } from "react";

const initialState = {
    data: [],
    error: "",
    loading: false
}

const reducerfun = (action, state) => {
    console.log('action', action)
    console.log('state', state)
    switch (action.type) {
        case "FetchRequest":
            return {
                ...state,
                data: [],
                error: "",
                loading: true
            }
        case "FetchSuccess":
            return {
                ...state,
                data: action.payload,
                error: "",
                loading: false
            }
        case "FetchError":
            return {
                ...state,
                data: [],
                error: action.payload,
                loading: false
            }

        default:
            return state;
    }
}
const ReducerFile = () => {
    const [state, dispatch] = useReducer(reducerfun, initialState);
    // console.log('state-state', state);
    // console.log('state-dispatch', dispatch);
    const btnClicked = async () => {
        try {
            dispatch({ type: "FetchRequest" })
            const APiCalHere = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log('GetHere', APiCalHere?.data);
            dispatch({ type: "FetchSuccess", payload: APiCalHere?.data });
        } catch (err) {
            console.log('err', err);
            dispatch({ type: "FetchError", payload: err.Message });
        }
    }
    useEffect(() => {
        console.log('sTaTe', state)
    }, [state])
    return (
        <>
            <h1> Reducer File Comp</h1>
            <button type="button" onClick={btnClicked}>Get API</button>
            {state?.payload?.map((ApiD) => (
                <div key={ApiD.id}>
                    <p>{ApiD.name}</p>
                </div>
            ))}
            {/* {state.loading && <p>Loading...</p>} */}
            {state.error && <p>Error: {state.error}</p>}
        </>
    )
}
export default ReducerFile;