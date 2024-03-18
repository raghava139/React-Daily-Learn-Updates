import React, { useState } from "react";

const TestingApp = () => {

    const [state, setState] = useState(0)
    const increment = () => {
        setState(state + 1)
    }
    return (
        <>
            <div className="raghavendra">
                Hello React count: {state}
            </div>
            <button type='button' className="mybtn" onClick={increment}>button-test</button>
        </>
    )
}
export default TestingApp