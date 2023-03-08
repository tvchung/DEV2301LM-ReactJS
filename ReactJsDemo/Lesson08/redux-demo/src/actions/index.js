import * as types from '../constants/index'

export const actChangeUserName = () =>{
    return{
        type: types.CHANGE_USERNAME,
        userNameNew : "Hoàng Tống Giang"
    }
}

export const actChangeCourseName = ()=>{
    return{
        type: types.CHANGE_COURSENAME,
        khoaMoi : "FrontEnd - ReactJS"
    }
}