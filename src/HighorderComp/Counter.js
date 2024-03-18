import React from 'react';
import WithCounter from './withCounter';

const CounterApp = ({ count, IncrementFunc, DecrementFunc }) => {
    return (
        <>
            <h1>Counter Component</h1>
            <button onClick={IncrementFunc}>Increment</button>
            <h2>{count}</h2>
            <button onClick={DecrementFunc}>Decrement</button>
        </>
    )
}
export default WithCounter(CounterApp);