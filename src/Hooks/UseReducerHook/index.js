import React, { useReducer } from 'react'
const initialState = {
    count: 0
}

const ReducerFucn = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case "increase":
            return { count: state.count + 1 };
        case "decrease":
            if (state.count == 0) {
                return { count: 0 }
            }
            else {
                return { count: state.count - 1 };
            }
        default:
            return state;
    }

}

const Reducercomp = () => {
    const [state, dispatchfunc] = useReducer(ReducerFucn, initialState)

    const increasingFunc = () => {
        dispatchfunc({ type: 'increase' })
    }
    const decreasingFunc = () => {
        dispatchfunc({ type: 'decrease' })
    }

    return (
        <>
            <h1>{state.count}</h1>
            <div>Reducercomp</div>
            <button onClick={increasingFunc}>increase</button>
            <button onClick={decreasingFunc}>decrease</button>
        </>
    )
}

export default Reducercomp