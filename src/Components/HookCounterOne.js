import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=>{console.log(`useEffect- updating document title`)
        document.title = `You clicked ${count} times`
    },[count])

  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)}  />
        <button onClick={()=>setCount(count+1)}>click {count} times</button>
    </div>
  )
}

export default HookCounterOne

/* 
useEffect will work for every render or every update.

useEffect will write inside the component, so that we can easily update state and props

Conditionally unpdating, while data is entered dynamically for each key stroke it shouldn't update the component, for a condition it should update the document.

*/