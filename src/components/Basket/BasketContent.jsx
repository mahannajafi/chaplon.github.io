import React , {useState} from "react";
import "./BasketContent.css"
import BasketProduct from "./BasketProduct";
import emptyBasketImage from "../../assets/imgs/empty-basket.png"

function BasketContent() {
    const [isEmpty , setEmpty] = useState(false)

    return (
        <div className="basket">
            <h4 className="basketTitle">سبد خرید شما</h4>
            {!isEmpty ? <>
                <BasketProduct />
                <BasketProduct />
                <BasketProduct />
                <BasketProduct />
                <BasketProduct />

            </> :
            <div className="emptyBasket">
                <img className="emptyBasketImage" src={emptyBasketImage} alt="" />
                <p>سبد خرید شما خالی است!</p>
            </div>}

        </div>
    )
}

export default BasketContent;