import React from 'react'

export default function CallBack(props) {
    console.log("ree-render");
  return (
    <div>
      <button onClick={props.handleUp}> Click Up</button>
    </div>
  )
}
