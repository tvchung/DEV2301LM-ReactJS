import { LOCAL_STORAGE_NAME } from "../constants/localStorage";
import { BUY_ITEM, UPDATE_ITEM, REMOVE_ITEM } from "../constants/actionTypes";

// chưa mua hàng
let initialState = [];
// đã mua hàng -> lấy dữ liệu từ localStorage
let shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
// initialState =(shoppingCartLocal != null && shoppingCartLocal.length>0)?shoppingCartLocal:initialState;
if(shoppingCartLocal !=null && shoppingCartLocal.length>0){
    initialState = shoppingCartLocal;
}
// tạo reducer ->cart
const cart = (state=initialState, action)=>{
    switch (action.actionType) {
        case BUY_ITEM:
            
            return state;
        case UPDATE_ITEM:
        
            return state;
        case REMOVE_ITEM:
    
            return state;
        default:
            return state;
    }
}
export default cart;