import {React, Component} from 'react'
class ClassCompDemo extends Component {

    

    render(){
        return(
            <div>
                <h1>Đây là class component</h1>
                <h3>
                    Class - Xin chào, <b>{this.props.name}</b>
                    <br/>
                    Tài khoản: <b>{this.props.userName}</b>
                </h3>
                <address>Company: <i>{this.props.company}</i></address>
            </div>
        )
    }
}
export default ClassCompDemo;