import React from "react";
import Avarta from "./Avatar";
const MemberInfo = (props)=>{
    return(
      <div>
        <Avarta link={props.info.path} />
        <h2>Name: {props.info.name}</h2>
        <h3>Tuổi: {props.info.age}</h3>
      </div>
    )
  }

  export default MemberInfo;