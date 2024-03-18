import React from 'react'
import Grandchild from './context-grandchild';

const ContextCHild = () => {
    return (
        <div>
            child
            <Grandchild/>
        </div>
    )
}

export default ContextCHild;