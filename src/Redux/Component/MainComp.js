import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchAPI, FetchAPI2, fetchDatasucess } from '../Actions/Actions';

const MainComp = () => {
    const dispatch = useDispatch();
    const { data, error, loading } = useSelector(state => state.firstReducer); 
    const { data:d, e, l } = useSelector(state => state.secondReducer); 
    // const clickedhere = async () => {

    // }

    useEffect(() => {
        console.log('data', data)
        console.log('data2', d)
      
    }, [data, error, loading,d,e,l])

    return (
        <div>MainComp
            <button type='button' onClick={() => dispatch(FetchAPI())}>clicked here</button>
            <button type='button' onClick={() => dispatch(FetchAPI2())}>clicked here2</button></div>
    )
}

export default MainComp