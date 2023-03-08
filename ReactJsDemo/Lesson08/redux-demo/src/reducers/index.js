import {combineReducers} from 'redux'
import courseName from './courseName';
import userName from './userName'

const reducer = combineReducers({
    userName:userName,
    courseName:courseName
})
export default reducer;
