import React, {useEffect} from "react";
function ExampleEffect(props){

    // sử dụng useEffect với 1 1 đối số

    // useEffect(()=>{
    //     console.log("Sử dụng useEffect");
    // })
    
     // sử dụng useEffect với 2 đối số, đối số thứ 2 là 1 mảng rỗng
    useEffect(()=>{
        console.log("Đầu vào là 1 callback và 1 mảng rỗng");
    },[])
    
    return(
        <div>
            <h2>Sử dụng useEffect </h2>
        </div>
    )
}

export default ExampleEffect;