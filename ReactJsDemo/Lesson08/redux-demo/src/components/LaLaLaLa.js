import React, { Component } from 'react'
import {connect} from 'react-redux';
class LaLaLaLa extends Component {
  render() {
    return (
      <div>
          <hr/>
        <h2>La la la la lala : {this.props.tongGiang}</h2>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
    return{
        tongGiang:state.userName
    }
}

export default  connect(mapStateToProps,null)(LaLaLaLa);