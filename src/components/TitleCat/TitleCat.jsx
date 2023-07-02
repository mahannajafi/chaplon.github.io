import "./TitleCat.css";
import more from "../../assets/imgs/more.png";
const TitleCat = ({ name, pic = "", dir = "ltr" }) => {
  return (
    <div dir={dir} className="titleCat__container">
      <div className="titleCat__second">
        <div className="titleCat__morePic">
          <img src={more} alt="" srcset="" />
        </div>
        <div className="titleCat__more">مشاهده بیشتر </div>
      </div>
      <div className="titleCat__first">
        <div className="titleCat__title">{name}</div>
        <div className="titleCat__pic">
          <img src={pic} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default TitleCat;
