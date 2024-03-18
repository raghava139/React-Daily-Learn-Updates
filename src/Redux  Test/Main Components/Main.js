import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFailureRequest, fetchGetRequest, fetchSuccessRequest, fetchingTheWholeData } from '../Actions/Action Creator';

const ComponentStart = () => {
    const dispatchTheData = useDispatch();
    const { data } = useSelector(state => state.GetReducer)

    const Previousbtn = async () => {
        console.log("previous")
        dispatchTheData(fetchingTheWholeData())
    }
    useEffect(() => {
        // console.log('data', data)
    }, [data])

    const Nextbtn = () => {
        console.log('next')
    }
    return (
        <>
            <h1>Testing Redux</h1>
            <button onClick={Previousbtn}>Previous</button>
            <button onClick={Nextbtn}>Next</button>
        </>
    )

}
export default ComponentStart;