import React, { useEffect, useRef, useState } from 'react'

const DoucmentREF = () => {
  const [state, setState] = useState("");
  // const [count, setCount] = useState(0);
  const Count = useRef(0)
  const InputREf = useRef(10)




  useEffect(() => {
    Count.current = Count.current + 1;
    InputREf.current.style.backgroundColor = 'grey';
  })

  const changingTheCS = (e) => {
    setState(e.target.value)
  }

  return (
    <div>
      <h1>{Count.current}</h1>
      <input type='text' onChange={changingTheCS} value={state} ref={InputREf} />
      <button>button</button>
    </div>

  )
}
export default DoucmentREF;