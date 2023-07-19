import React,{useState} from 'react'

function UseStateWithArray() {
    const [items,setItems]=useState([])
    const addItem =()=>{setItems([...items,{id:items.length,value:Math.floor(Math.random()*10)+1}])}


  return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
            {
                items.map(item=>(<li key={item.id}>{item.value}</li>))
            }
        </ul>
      
    </div>
  )
}
export default UseStateWithArray

/* 
summary of usestate: -
````````````````````
* The useState hook lets you add state to functional components.
* in classes, the state is always an object.
* with use statehook, the state doesn't have to be an object.
* the usestate hook returns an array with two elements.
* the first element is the current value of the state, and the second element is a state setter function.
* New state value depends on the previous state value? you can pass a function to the setter function.
* When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function.
*/