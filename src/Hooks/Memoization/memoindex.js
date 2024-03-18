import React, { useState } from 'react'

const Memoindex = () => {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)


    const calculation = expensivefunction(number);

    const cssStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

    return (
        <div>Memoindex</div>
    )
}

function expensivefunction(num) {
    for (let i = 0; i < 10000000; i++) { }
    return num
}

export default Memoindex