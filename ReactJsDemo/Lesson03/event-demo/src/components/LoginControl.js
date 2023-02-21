import {React,Component} from 'react'
class LoginControl extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false
        }
    }

    // // login
    // handleLogin = ()=>{
    //     this.setState({
    //         isLoggedIn:true
    //     })
    // }
    // // logouut
    // handleLogout = ()=>{
    //     this.setState({
    //         isLoggedIn:false
    //     })
    // }

    // login/logoout
    handleLog =(param)=>{
        this.setState({
            isLoggedIn:param
        })
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
         // react element
        var LoginComp = ()=>{
            return(
                <div className='alert alert-success'>Welcome to my Application</div>
            )
        }
        var LogoutComp = ()=>{
            return(
                <div className='alert alert-danger'>
                    Please sign in
                </div>
            )
        }
        var Login = (props)=>{
            const isLoggedIn = props.isLoggedIn;
            if(isLoggedIn){
                return <LoginComp />
            }
            return <LogoutComp />
        }

        return(
            <div>
                <Login isLoggedIn={this.state.isLoggedIn} />
                {
                    isLoggedIn?<input type={'button'} value="Logout" 
                        // onClick={this.handleLogout} 
                        onClick={()=>this.handleLog(false)}
                        />
                    :<input type={'button'} value="Login" 
                        // onClick={this.handleLogin} 
                        onClick={()=>this.handleLog(true)}
                        />
                }
            </div>
        )
    }

}
export default  LoginControl;