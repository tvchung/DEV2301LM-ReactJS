import {React, Component} from 'react';

class EventDemo extends Component{


    // function
    eventHandleClick1 = ()=>{
        alert("Arrow function - button1 click");
    }
    eventHandleClick2(){
        alert("Normal function  - button2 click");
    }

    render(){
        return(
            <div>
                {/* <button onClick={this.eventHandleClick1()}>Click 1</button> */}
                <button onClick={this.eventHandleClick2}>Click 2</button>
                <button onClick={this.eventHandleClick1}>Click 3</button>
            </div>
        )
    }
}
export default EventDemo;