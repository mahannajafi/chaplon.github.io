import "./RawProductShowCase.css";
import sweatshirt from "../../assets/imgs/swishert.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RawProductShowCase = ({ product }) => {
  return (
    <>
      <div className="showcase">
        <div className="showcase__image-selection">
          <div className="showcase__image-selection__first"></div>
          <div className="showcase__image-selection__second"></div>
          <div className="showcase__image-selection__third"></div>
        </div>

        <div className="showcase__image-box">
          <img src={product?.blank_product_images[0]?.image} alt="" />
        </div>

        <div className="showcase__product-description">
          <div className="showcase__product-description__title-container">
            <h3>{product?.title ? product?.title : "نام محصول"}</h3>
            <span className="score">
              امتیاز
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>

          <div className="showcase__product-description__attributes-container">
            <h4>ویژگی های محصول :</h4>
            <ul className="product-attributes-container">
              {product?.props?.map((e) => (
                <li>
                  {e?.prop}  :  {e?.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RawProductShowCase;
