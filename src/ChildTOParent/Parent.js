import { useState } from "react";
import ChildCom from "./Child"

const Parent = () => {
    const [childData, setChildData] = useState();
    const HandleData = (data) => {
        console.log('handledata', data)
        setChildData(data);
    }
    return (
        <>
            <ChildCom sendFunction={HandleData}></ChildCom>
            <h1>Child to Parent Component</h1>
            <h1>{childData}</h1>
        </>
    )
}

export default Parent;