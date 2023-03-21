import {React, useState} from 'react'
function Example(props){
    // khai báo biến mảng
    const list = ["arr1","arr2"];
    // sử dụng useState
    const [count,setCount] = useState(0);
    
    const [lists, setList] = useState(list);
    // xử lý sự kiện
    const handleCount = ()=>{
        setCount(count+1)
    }

    const handleLists = () =>{
        setList([
            ...lists,
            parseInt(Math.random()*1000)
        ])
    }
    return(
        <div>
            <h2>Tìm hiều về useState của hook</h2>
            <div>
                <h3>count: {count}</h3>
                <button onClick={handleCount}>
                    Click count
                </button>
            </div>
            <div>
                <h3>List: {lists.toString()}</h3>
                <button onClick={handleLists}>
                    Set list 
                </button>
            </div>
        </div>
    );
}

export default Example;