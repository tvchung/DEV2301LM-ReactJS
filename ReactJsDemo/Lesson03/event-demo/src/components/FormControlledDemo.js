import {React, Component} from 'react';
class FormControlledDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentName:'',
            course:'',
            age:0
        }
    }
    // handleChange =(event)=>{
    //     this.setState({
    //         studentName:event.target.value
    //     })
    // }
    handleChange =(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e)=>{
        alert('Welcome,' + this.state.studentName + '\n' + this.state.course);
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Student Name:</label>
                        <input type={'text'} 
                            name="studentName"
                            value={this.state.studentName} 
                            onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Student Age:</label>
                        <input type={'number'} 
                            name="age"
                            value={this.state.age} 
                            onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Chọn khóa học:</label>
                        <select value={this.state.course} 
                                name="course"
                                onChange={this.handleChange}
                            >
                            <option value={'HTML5'}>HTML5</option>
                            <option value={'CSS3'}>CSS3</option>
                            <option value={'Javascript'}>Javascript</option>
                            <option value={'ReactJS'}>ReactJS</option>
                        </select>
                    </div>
                    <div>
                        <input type={'submit'} value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}
export default FormControlledDemo;