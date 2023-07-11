import React , {useState} from "react";
import "./BasketProduct.css"
import image from "../../assets/imgs/swishert.png"
import CloseIcon from '@mui/icons-material/Close';

function BasketProduct() {
    const [count , setCount] = useState(1)
    return (
        <div className="basketProduct">
            <img className="basketProductImage" src={image} alt="" />
            <div className="basketProductInfo">
                <div className="removeBasketProduct"><CloseIcon /></div>
                <h4 className="basketProductName">هودی مدل 17</h4>
                <div className="basketProductColorContainer">رنگ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="basketProductColor"></div></div>
                <div className="basketProductSizeContainer">سایز&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="basketProductSize">s</div></div>
                <div className="basketProductPrice">
                    <h4>{108000} تومان</h4>
                    <div className="basketProductNumber">
                        <button onClick={()=>setCount(count + 1)}>+</button>
                        <p>{count}</p>
                        <button onClick={()=>setCount(count - 1)}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketProduct;