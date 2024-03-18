import React, { useContext } from 'react'
import { GlobalContext } from './useContext-Main';

const Grandchild = () => {
    let GetGlobalState = useContext(GlobalContext);
    console.log('globalstate',GetGlobalState)
  return (
    <div>
        Grand-Child {GetGlobalState?.oBject?.name}
    </div>
  )
}

export default Grandchild;