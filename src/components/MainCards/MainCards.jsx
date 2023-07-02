import "./MainCards.css";
import card1 from "../../assets/imgs/card-1.png";
import card2 from "../../assets/imgs/card-2.png";
import card3 from "../../assets/imgs/card-3.png";
import card4 from "../../assets/imgs/card-4.png";

function MainCards() {
  return (
    <div className="mainCards__container">
      <div className="mainCards__card">
        <img src={card1} alt="" srcset="" />
      <div className="mainCards__card-title">محصولات متنوع و منحصر به فرد </div>
      </div>
      <div className="mainCards__card">
        <img src={card2} alt="" srcset="" />
        <div className="mainCards__card-title">تولید محصولات انحصاری</div>
      </div>
      <div className="mainCards__card">
        <img src={card3} alt="" srcset="" />
        <div className="mainCards__card-title">سفارش طرح‌های دلخواه</div>
      </div>
      <div className="mainCards__card">
        <img src={card4} alt="" srcset="" />
        <div className="mainCards__card-title">کسب درآمد آسان </div>
      </div>
    </div>
  );
}

export default MainCards;
