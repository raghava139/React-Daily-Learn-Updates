const ChildCom=({sendFunction})=>{
    const clickedHere=()=>{
        const data  = "CHild Text";
        sendFunction(data);
    }

    return(
        <>
            <button type='button' onClick={clickedHere}>button</button>
        </>
    )
}
export default ChildCom;