import "./Swipercard.css";
import swishert from "../../assets/imgs/swishert.png";
import plus from "../../assets/imgs/plus.png";

const Swipercard = (props) => {
  return (
    <div className="swiper__option">
      <div className="swiper__pic">
        <img src={swishert} alt="" />
        <div  className="swiper__plus">
          <img src={plus} alt="" />
        </div>
      </div>
      <div className="swiper__title">{props.name}</div>
      <div className="swiper__price">{props.price} تومان</div>
    </div>
  );
};

export default Swipercard;
