import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import CallBack from './CallBack';

export default function DemoUseCallback() {
    const [count, setCount] = useState(100);
    const handleUp = useCallback(()=>{
        setCount(prevCount => prevCount +1)
    },[]);
  return (
    <div>
      <h2> useCallback Demo</h2>
      <p>Current value: {count}</p>
        <CallBack handleUp = {handleUp} />
    </div>
  )
}
