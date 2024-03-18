import React, { createContext, useContext, useState } from "react";
import ParentContext from "./context-p";


export const GlobalContext = createContext()

const Globals = () => {

    const [state,setState] =useState('sometext')
    const [oBject,setOBject] =useState({name:'raghavendra'})
    let setValues = {
        state,oBject
    }
    return (
        <GlobalContext.Provider value={setValues}>
            <div>
                GLobal
                <ParentContext />
            </div>
        </GlobalContext.Provider>
    )
}
export default Globals;