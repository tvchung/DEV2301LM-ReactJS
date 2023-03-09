import * as types from '../constants/actionTypes';

// action cho chức năng hiển thị thông tin sản phẩm
export const act_list_product = ()=>{
    return{
        actionType: types.LIST_PRODUCT
    }
}
// action cho chức năng mua hàng (click nút mua hàng)
export const act_buy_item = (product, quantity)=>{
    return{
        actionType:types.BUY_ITEM,
        product,
        quantity
    }
}
// action cho chức năng cập nhật số lượng trong giỏ hàng
export const act_update_item = (product,quantity)=>{
    return{
        actionType:types.UPDATE_ITEM,
        product,
        quantity
    }
}
// action cho chức năng xóa sản phẩm trong giỏ hàng
export const act_remove_item = (product)=>{
    return{
        actionType:types.REMOVE_ITEM,
        product
    }
}
// action cho chức năng thông báo
export const act_change_notify = (content)=>{
    return{
        actionType:types.CHANGE_NOTIFY,
        content
    }
}