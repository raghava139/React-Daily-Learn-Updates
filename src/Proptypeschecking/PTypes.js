import React from 'react';
import { PropTypes } from "prop-types";


const SomePtypes=({name})=>{
    return (
        <>
            <h1>Hi , this is {name}</h1>
        </>
    )
}

SomePtypes.propTypes ={
    // name:PropTypes.string.isRequired
    name:PropTypes.string
}

SomePtypes.defaultProps={
    name:'default-text-for name'
}
export default SomePtypes;

