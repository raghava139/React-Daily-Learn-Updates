import { useContext } from "react";
import { StoreContext } from "./Main Comp";

const NestedCompFunction=()=>{
    const getStoreContext = useContext(StoreContext);
    // console.log('getStoreContext',getStoreContext)
    return(
        <>
            <h1>Child Component{getStoreContext}</h1>
        </>
    )
}
export default NestedCompFunction;