import "./ProductSellerBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faL} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductSellerBox = () => {
  return (
    <>
      <div className="product-seller-box">
        <h3 className="product-seller-box__title">نام تولید کننده</h3>
        <div className="product-info">
          <div className="product-info-box product-seller-box__available-colors">
            رنگ های موجود
            <br />
            <div className="color color--green"></div>
            <div className="color color--red"></div>
            <div className="color color--yellow"></div>
          </div>
          <div className="product-info-box product-seller-box__available-sizes">
            سایز های موجود
            <br />
            <FontAwesomeIcon icon={faL} className="size" />
            <FontAwesomeIcon icon={faM} className="size" />
          </div>
          <div className="product-info-box product-seller-box__address">
            آدرس
            <br />
            <div className="addressBox">تهران</div>
          </div>
          <div className="product-info-box product-seller-box__delivery-time">
            زمان آماده سازی
            <br />
            <div className="delivery-time">سه روز</div>
          </div>
          <div className="product-info-box product-seller-box__price">
            قیمت:
            <span className="price">۲۵۰۰۰ تومان</span>
            <button className="design-this-product-btn">
              <Link className="design-this-product-btn__link" to="/Design">طراحی این محصول</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSellerBox;
