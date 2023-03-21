import React from 'react'
import { useState,useRef } from 'react'
export default function DemoUseRef() {
    const [time, setTime]=useState(60);
    let timeId= useRef();
    const handleStart = ()=>{
       timeId.current= setInterval(()=>{
            setTime(prevTime => prevTime - 1);
        },1000)
        console.log("Start=>",timeId);
    }
    const handleStop = ()=>{
        clearInterval(timeId.current);
        console.log("Stop=>",timeId);
    }
  return (
    <div>
      <h2>Devmaster - React Hook - useRef Demo</h2>
      <h3>Current time: {time}</h3>
      <button onClick={handleStart}> Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}
