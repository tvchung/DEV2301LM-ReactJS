import {React, Component} from 'react';
import LaLaLaLa from './components/LaLaLaLa';
import WelcomeRedux from './components/WelcomeRedux';

import {connect} from 'react-redux'
import { actChangeCourseName, actChangeUserName } from './actions';

class App extends Component {
  
  handleChangeUserName = () =>{
    this.props.changeUserName();
  }

  handleChangeCourseName = ()=>{
    this.props.changeCourseName();
  }

  render(){
    return(
      <div>
        <button onClick={this.handleChangeUserName}>Change UserName</button>
        <button onClick={this.handleChangeCourseName}>Change CourseName</button>
        <WelcomeRedux></WelcomeRedux>
        <LaLaLaLa></LaLaLaLa>

      </div>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    changeUserName:()=>{
      dispatch(actChangeUserName())
    },
    changeCourseName:()=>{
      dispatch(actChangeCourseName())
    }
  }
}
export default connect(null,mapDispatchToProps) (App);
