import React, {useState} from 'react'

 function UseState() {
    const [count, setCount] = useState(0)
    console.log(count);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>count : {count}</button>
    </div>
  )
}
export default UseState