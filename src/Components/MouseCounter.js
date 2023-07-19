import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseCounter() {
    const [display,setDisplay]=useState(true)
  return (
    <div>
        <button onClick={()=>{setDisplay(!display)}}></button>
        {display && <HookMouse/>}
        </div>
  )
}

export default MouseCounter