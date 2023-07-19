/* 
Fetching data by click on the button
*/

import React, {useState,useEffect}from 'react'
import axios from 'axios'

function Fetching3() {
    const [post,setPost]=useState({})
    const [id,setId] =useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)
    const handler = ()=>{setIdFromButtonClick(id)}

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        }).catch(err=>{console.log(err)})
    },[idFromButtonClick])
  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)} />
        <button type='button' onClick={handler}>Fetch Post</button>
        <div>{post.title}</div>
    </div>
  )
}

export default Fetching3