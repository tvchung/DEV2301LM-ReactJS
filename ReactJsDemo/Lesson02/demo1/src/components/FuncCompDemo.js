import React from 'react';

function FuncCompDemo(props){
    return(
        <div>
            <h1>Đây là function component</h1>
            <p>
                Xin chào, <strong>{props.name}</strong>
                <br/>
                Tài khoản của bản: <b>{props.userName}</b>
            </p>
        </div>
    )
}
export default FuncCompDemo;