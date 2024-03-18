import { useState } from "react"

const WithCounter = (WrappedComp) => {

    function TestWrapComp() {
        const [state, setState] = useState(0);            

        const IncrementFunc = () => {
            setState(state+1);
        }

        const DecrementFunc = () => {
            setState(state-1);
        }
        
        return (
            <>
                <WrappedComp count={state} IncrementFunc={IncrementFunc} DecrementFunc={DecrementFunc} />
            </>
        )
    }
    return TestWrapComp;
}
export default WithCounter