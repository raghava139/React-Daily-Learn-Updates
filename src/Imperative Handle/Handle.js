import { useEffect, useRef } from "react";

export const HandleImperative = () => {
    const testRef = useRef(null);
    useEffect(() => {
        console.log(testRef.current);
    }, [])
    const HandleClick = () => {
        console.log('hello')
        testRef.current.focus();
    }
    return (
        <>
            <input type='text' ref={testRef} />
            <button type="button" onClick={HandleClick}>Button</button>
        </>
    )
}

