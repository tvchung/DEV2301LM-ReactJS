import {React, Component} from 'react';

class EventDemoParam extends Component{


    // function
    eventHandleClick1 = (content)=>{
        alert("Arrow function - button1 click\n" + content );
    }
    eventHandleClick2(content){
        alert("Normal function  - button2 click \n" + content);
    }

    render(){
        return(
            <div>
                <hr/>
                <button onClick={this.eventHandleClick1("Devmaster")}>Click 1</button>
                <button onClick={()=>this.eventHandleClick2("Chung Trịnh")}>Click 2</button>
                <button onClick={()=>this.eventHandleClick1("Hoàng Tống Giang")}>Click 3</button>
            </div>
        )
    }
}
export default EventDemoParam;