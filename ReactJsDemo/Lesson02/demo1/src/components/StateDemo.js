import React, {Component} from 'react';
class StateDemo extends Component{
    constructor(props){
        super(props);
        // Quản lý state
        this.state = {
            name:"Trần Quang Tèo",
            age:20
        }
    }
    // phát sinh khi người dùng thay đổi giá trị trong state
    handleChangeName = ()=>{
        this.setState({
            name:"Chung Trịnh Văn"
        });
    }
    render(){
        return(
            <div>
                <h1> Demo State in React </h1>
                <hr/>
                {/* sử dụng dữ liệu trong state  */}
                <h2>Name: {this.state.name}</h2>
                <h3>Age: {this.state.age}</h3>

                {/* tạo sự thay đổi stat từ người dùng */}
                <button type='button' onClick={this.handleChangeName}>Change Name</button>

            </div>
        )
    }
}

export default StateDemo;