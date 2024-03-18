import React from 'react'
import ContextCHild from './context-ch'

const ParentContext = () => {
    return (
        <div>
            parent
            <ContextCHild />
       </div>
    )
}

export default ParentContext