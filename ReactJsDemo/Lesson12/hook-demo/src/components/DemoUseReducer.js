import React from 'react'
import { useReducer } from 'react'
// khởi tạo giá trị state
const initState = 0;
// Các action tương tác làm thay đổi state
const UP_ACTION = "UP"
const DOWN_ACTION = "DOWN"
// Khởi tạo reducer
const reducer = (state=initState, action)=>{
    switch (action) {
        case UP_ACTION:
            return state+1;
        case DOWN_ACTION:
            return state-1;
        default:
            return state;
    }
}
export default function DemoUseReducer() {
    const [count,dispatch] = useReducer(reducer,initState);
    const handleUp = ()=>{
        dispatch(UP_ACTION);
    }
    const handleDown = ()=>{
        dispatch(DOWN_ACTION)
    }
  return (
    <div>
      <h2> Demo useReducer</h2>
      <h3> Count: {count}</h3>
      <button onClick={handleUp}>
          Up
      </button>
      <button onClick={handleDown}>
          Down
      </button>
    </div>
  )
}
