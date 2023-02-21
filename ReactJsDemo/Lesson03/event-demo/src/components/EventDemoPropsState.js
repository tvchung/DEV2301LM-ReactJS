import {React, Component} from 'react';
class EventDemoPropsState extends Component {
    constructor(props){
        super(props);
        this.eventHandleClick3 = this.eventHandleClick3.bind(this);
        // sử dụng state
        this.state = {
            name:"Chung Trịnh Văn",
            job:"DevSoft"
        }
    }
    eventHandleClick1 = ()=>{
        alert(this.props.name1 );
    }
    eventHandleClick2(){
        alert(this.props.name2);
    }
    eventHandleClick3(){
        alert(this.props.name3);
    }
    // change state
    changeNameState = (name)=>{
        this.setState({
            name:name
        })
        alert(this.state.name + "\n" + this.state.job);
    }
    render(){
        return(
            <div className='list-group w-25'>
                {/* Khai báo arrow function   */}
                <button type='button' className='btn btn-danger' 
                        onClick={()=>this.eventHandleClick1()}>
                        Button 01</button>
                
                <button type='button' className='btn btn-success'
                        onClick={()=>this.eventHandleClick2()}>
                        Button 02</button>
                
                <button type='button' className='btn btn-info'
                        onClick={this.eventHandleClick3}>
                        Button 03</button>
                {/* Thay đổi giá trị trong state  */}
                <button type='button' className='btn btn-dark'
                        onClick={()=>this.changeNameState("La la la lal la")}>
                        Change Name</button>
            </div>
        )
    }
}
export default EventDemoPropsState;