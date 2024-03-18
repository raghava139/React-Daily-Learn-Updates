import React, { useId } from 'react';


const MyUniqueID=()=>{
    const Id = useId();
    return (
        <div>
            <h1 id={`${Id}--firstName`}>Unique Id...</h1>
        </div>
    )
}
export default MyUniqueID;