import * as types from "../constants"

// tạo reducer từ action và state
// input: old state, action
// outpuut: return new state

const initialState = "Chung Trịnh Văn";

const userName = (state = initialState, action) =>{
    // thực hiện cập nhật state
    switch(action.type){
        case types.CHANGE_USERNAME:
            state = action.userNameNew;
            return state;
        default:
            return state;
    }
}
export default userName;