import React, { useEffect, useState } from 'react';

const PageLoading = () => {
    const [state, setState] = useState(0)

    // // component did mount --> at first time renders
    
    // useEffect(() => {
    //     console.log('triggered-didmount',state)
    // }, [])

    //  // component did update without dependency ---> if any changes in component it triggers whole component
   
    //  useEffect(() => {
    //     console.log('triggered-didupdatewithoutdepS',state)
    // })

    // // component did update with dependency ---> if any changes in component it triggers only that particular state
    
    // useEffect(() => {
    //     console.log('update with dep',state)
    // },[state])

    // // component will Unmount ---> clean up function

    // useEffect(() => {
    //     console.log('wil unmount',state)
    //     return ()=>{
    //         console.log('return',state)
    //         setState(0)
    //     }
    // },[state])

    return (
        <>
            <h1>useEffect Testing - {state}</h1>
            <button onClick={() => setState(state + 1)}>click here</button>
        </>
    )
}
export default PageLoading;