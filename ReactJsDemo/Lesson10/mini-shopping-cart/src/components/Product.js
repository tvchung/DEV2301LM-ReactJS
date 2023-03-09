import React, { Component } from "react";

export default class Product extends Component {
  render() {
    // lấy dữ liệu từ props (product) => hiển thị ra views
    let {product} = this.props;
    // render có điều kiện
    let elemenBuy = <span class="price">  {product.price} USD</span>;
    if(product.quantity>0){
      elemenBuy=(
        <>
          <input
            name="quantity-product-1"
            type="number"
            defaultValue={1}
            min={1}
          />
          <button data-product={1} className="btn btn-success">
            Mua hàng
          </button>
          <a type='button'  data-product={1} href="/#" className="price">
           {product.price} USD 
          </a>
        </>
      );
    }
    return (
      <div className="media product">
        <div className="media-left">
          <a type='button'  href="/#">
            <img
              className="media-object"
              src={`images/${product.image}`}
              alt="charmander"
            />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{product.productName}</h4>
          <p>
            {product.descriptions}
          </p>
          {elemenBuy}
          {/* <input
            name="quantity-product-1"
            type="number"
            defaultValue={1}
            min={1}
          />
          <button data-product={1} className="btn btn-success">
            Mua hàng
          </button>
          <a type='button'  data-product={1} href="/#" className="price">
           {product.price} USD 
          </a> */}
        </div>
      </div>
    );
  }
}
