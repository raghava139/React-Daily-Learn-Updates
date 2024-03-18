import { useDispatch, useSelector } from "react-redux";
import { Decrement_creator, FetchAPIDataHere, Fetch_Failure, Fetch_Request, Fetch_Success, Increment_creator } from "../Actions/ActionCreator";
import { useEffect } from "react";
import axios from "axios";


const TestMainComp = () => {

    const dispatch = useDispatch();
    const GetState1 = useSelector((s) => s.firstReducer);
    const GetState2 = useSelector((s) => s.secondReducer);

    console.log('state-1', GetState1)
    console.log('state-2', GetState2)
    const INCRClick = () => {
        dispatch(Increment_creator());
    }

    const DECRClick = () => {
        console.log("decrement")
        dispatch(Decrement_creator());
    }

    // // function for APi 
    // async function APIReusable(){
    //     dispatch(Fetch_Request());
    //     try{
    //         const Response  = await axios.get('https://jsonplaceholder.typicode.com/users')
    //         dispatch(Fetch_Success(Response?.data));
    //     }
    //     catch(err){
    //         dispatch(Fetch_Failure(err));
    //     }
    // }

    useEffect(() => {
        dispatch(FetchAPIDataHere());
    }, [])

    return (
        <>
            <h1>{GetState1?.count}</h1>
            <button type="button" onClick={INCRClick}>+</button>
            <button type="button" onClick={DECRClick}>-</button>

            {GetState2?.error !== "" ?
                <h1>error in api</h1>
                :
                <>
                    {GetState2?.data?.map((d) => {
                        return <h1 key={d?.id}>{d?.name}</h1>
                    })}
                </>
            }
        </>
    )
}
export default TestMainComp;