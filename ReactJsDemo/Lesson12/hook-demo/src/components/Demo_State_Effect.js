import React, {useState, useEffect} from "react";
function Example2(props){

    const [count,setCount] = useState(0);

    // sử dung useEffect với 
        // - callback
        // - [dept]
    useEffect(()=>{
        console.log("Mỗi khi count thay đổi....");
    },[count])
    return(
        <div>
            <h2> Sử dụng useState, useEffect</h2>
            <h3>Count: {count}</h3>
            <button onClick={()=>setCount(count+1)}>
                Thay đổi count
            </button>
        </div>
    )
}
export default Example2;