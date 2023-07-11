import React, { useState } from "react";
import "./BasketProduct.css";
import image from "../../assets/imgs/swishert.png";
import CloseIcon from "@mui/icons-material/Close";

function BasketProduct({ product }) {
  const [count, setCount] = useState(product?.number);
  console.log(product?.picture);
  return (
    <div className="basketProduct">
      <img className="basketProductImage" src={product?.picture} alt="" />
      <div className="basketProductInfo">
        <div className="removeBasketProduct">
          <CloseIcon />
        </div>
        <h4 className="basketProductName">{product?.title}</h4>
        <div className="basketProductColorContainer">
          رنگ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div
            className="basketProductColor"
            style={{ backgroundColor: `${product?.color}` }}
          ></div>
        </div>
        <div className="basketProductSizeContainer">
          سایز&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="basketProductSize">{product?.size}</div>
        </div>
        <div className="basketProductPrice">
          <h4>{product?.price} تومان</h4>
          <div className="basketProductNumber">
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>{count}</p>
            <button
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketProduct;
