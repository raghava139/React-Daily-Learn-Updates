import React, { createContext, useContext, useState } from 'react';
import GrandChildComp from './Nested Child Comp';
import NestedCompFunction from './Nested Comp';

export const StoreContext = createContext();
const MainCompContext = () => {
    const [state, setState] = useState(0)
    const clickedButton = () => {
        setState(state + 1);
    }
    return (
        <StoreContext.Provider value={state} >
            <button type='button' onClick={clickedButton}> Parent Component </button>
            <NestedCompFunction />
            <GrandChildComp />
        </StoreContext.Provider>
    )
}
export default MainCompContext;