import TitleCat from "../TitleCat/TitleCat";
import pic from "../../assets/imgs/titlepic.png";
import Swiperer from "../Swiperer/Swiperer";
import "./Papular.css";

const Popular = () => {
  return (
    <div dir="rtl" className="Popular__container">
      <TitleCat name="تازه‌های پرفروش" pic={pic} />
      <Swiperer />
    </div>
  );
};

export default Popular;
