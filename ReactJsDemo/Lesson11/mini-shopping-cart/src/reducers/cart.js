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
// hàm kiểm tra sản phẩm đã có trong giỏ hàng hay chưa?
const getIndexByProduct = (listItem, product)=>{
    for (let index = 0; index < listItem.length; index++) {
        if(listItem[index].product.productId === product.productId){
            return index;
        }
    }
    return -1;
}
// tạo reducer ->cart
const cart = (state=initialState, action)=>{
    // lấy sản phẩm, số lượng từ action
    let {product, quantity} = action;
    let item={product, quantity} ;
    let index = -1;
    switch (action.type) {
        case BUY_ITEM:
            if(state.length === 0){
                // Khi khách hàng chọn mua hàng mà giỏ hàng của khách chưa có
                // thực hiện thêm sản phẩm đó vào giỏ hàng
                state.push(item);
            }else{
                // khách hàng mua hàng -> giỏ hàng đã có, có sản phẩm?
                // thực hiện kiểm tra xem sản phẩm đã có trong giở hàng hay chưa
                index = getIndexByProduct(state,product); 
                if(index>=0){
                    // sản phẩm khách hàng chọn mua đã có trong giỏ hàng
                    // thực hiện tăng số lượng mua
                    state[index].quantity = parseInt(state[index].quantity) + parseInt(item.quantity);
                }else{
                    // Sản phẩm khách hàng chọn mua chưa có trong giỏ hàng
                    state.push(item);
                }
            }
            // lưu lại giỏ hàng vào localStorage
            localStorage.setItem(LOCAL_STORAGE_NAME,JSON.stringify(state));
            return [...state];
        case UPDATE_ITEM:
            index = getIndexByProduct(state,product); 
            if(index>=0){
                state[index].quantity = parseInt(item.quantity);
            }
            // lưu lại giỏ hàng vào localStorage
            localStorage.setItem(LOCAL_STORAGE_NAME,JSON.stringify(state));
            return [...state];
        case REMOVE_ITEM:
            index = getIndexByProduct(state,product); 
            if(index>=0){
                // thực hiện xóa
                state.splice(index,1);
            }
            // lưu lại giỏ hàng vào localStorage
            localStorage.setItem(LOCAL_STORAGE_NAME,JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}
export default cart;