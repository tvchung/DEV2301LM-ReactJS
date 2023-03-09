import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    // lấy dữ liệu từ props (item)
    let {item, index} = this.props;

    return (
      <tr>
        <th scope="row">{index}</th>
        <td>{item.product.productName}</td>
        <td>{item.product.price} USD</td>
        <td>
          <input
            name="cart-item-quantity-1"
            type="number"
            value={item.quantity}
          />
        </td>
        <td>
          <strong>12 USD</strong>
        </td>
        <td>
          <a type='button' 
            className="label label-info update-cart-item"
            href="/#"
            data-product=""
          >
            Update
          </a>
          <a type='button' 
            className="label label-danger delete-cart-item"
            href="/#"
            data-product=""
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}
