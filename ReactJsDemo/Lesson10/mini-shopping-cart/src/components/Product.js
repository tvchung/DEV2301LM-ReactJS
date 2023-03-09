import React, { Component } from "react";

export default class Product extends Component {
  render() {
    return (
      <div className="media product">
        <div className="media-left">
          <a href="#">
            <img
              className="media-object"
              src="images/aplusautomation.jpg"
              alt="charmander"
            />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">aplusautomation</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
            asperiores veniam repellat unde debitis quisquam magnam magni ut
            deleniti!
          </p>
          <input
            name="quantity-product-1"
            type="number"
            defaultValue={1}
            min={1}
          />
          <button data-product={1} className="btn btn-success">
            Mua hàng
          </button>
          <a data-product={1} href="#" className="price">
            {" "}
            12 USD{" "}
          </a>
        </div>
      </div>
    );
  }
}
