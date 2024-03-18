import { useContext } from "react";
import { StoreContext } from "./Main Comp";

const GrandChildComp = () => {

    const getStoreContext = useContext(StoreContext)
    return (
        <>
            <h1>Grand Child Component {getStoreContext}</h1>
        </>
    )
}
export default GrandChildComp;