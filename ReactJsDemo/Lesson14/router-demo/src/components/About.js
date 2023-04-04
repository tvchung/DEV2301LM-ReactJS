import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate();
  return (
    <div>
      <h2>About: Devmaster Academy</h2>
      <button onClick={()=>{navigate('/',{replace:true})}}> 
            Go to home</button>
      <button onClick={()=>navigate(-1)}>
            Back</button>
      <button onClick={()=>navigate(-2)}>
            Back2</button>
    </div>
  )
}
