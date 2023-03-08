import * as types from "../constants"

// tạo reducer từ action và state
// input: old state, action
// output: return new state

const initialState = "FrontEnd";

const courseName = (state = initialState, action) =>{
    // thực hiện cập nhật state
    switch(action.type){
        case types.CHANGE_COURSENAME:
            state = action.khoaMoi;
            return state;
        default:
            return state;
    }
}
export default courseName;