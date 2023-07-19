/* 
If we need to use multiple use effect, seperate them and make it clear not to use in only one effect
*/
import React, { useEffect, useState } from 'react'

function IntervelHookCounter() {
    const [count,setCount] = useState(0)

    const tick = ()=>{setCount(prevCount=>prevCount+1)}

    useEffect(()=>{
        function doSomething(){
            console.log(someProps)
        }
        doSomething()
        const interval = setInterval(tick,1000)

        return ()=>{
            clearInterval(interval)
        }
    },[someProps])
  return (
    <div>{count}</div>
  )
}

export default IntervelHookCounter