import React,{useState} from 'react'

function UseStatePreviousState() {
    const initalCount = 0;

    const [count, setCount] = useState(initalCount);

    const increamentCount = ()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount =>prevCount+1)
        }
    }
      return (
    <div>

      count: {count} <br/>
      <button onClick={()=>setCount(initalCount)}>Reset</button>

      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>

      <button onClick={()=>setCount(prevCount=>prevCount-1)}>decrement</button><br/>

      <button onClick={increamentCount}>Increment 5</button>
    </div>
  )
}
export default UseStatePreviousState
