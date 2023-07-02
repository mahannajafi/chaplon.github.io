import "./RawProductShowCase.css";
import sweatshirt from "../../assets/imgs/swishert.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RawProductShowCase = () => {
  return (
    <>
      <div className="showcase">
        <div className="showcase__image-selection">
          <div className="showcase__image-selection__first"></div>
          <div className="showcase__image-selection__second"></div>
          <div className="showcase__image-selection__third"></div>
        </div>

        <div className="showcase__image-box">
          <img src={sweatshirt} alt="" />
        </div>

        <div className="showcase__product-description">
          <div className="showcase__product-description__title-container">
            <h3>نام محصول</h3>
            <span className="score">
              امتیاز
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>

          <div className="showcase__product-description__attributes-container">
            <h4>ویژگی های محصول</h4>
            <ul className="product-attributes-container">
              <li>لورم ایپسوم متن ساختگی</li>
              <li>لورم ایپسوم متن ساختگی</li>
              <li>لورم ایپسوم متن ساختگی</li>
              <li>لورم ایپسوم متن ساختگی</li>
              <li>لورم ایپسوم متن ساختگی</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RawProductShowCase;
