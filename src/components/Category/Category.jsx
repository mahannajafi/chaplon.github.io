import "./Category.css";
import mask1 from "../../assets/imgs/Mask1.png";
import mask2 from "../../assets/imgs/Mask2.png";
import mask3 from "../../assets/imgs/Mask3.png";

function Category() {
  return (
    <>
      <div className="category__container">
        <button className="category__button">دسته بندی محصولات</button>
        <div className="line"/>
        <div className="category__cat">
          <div className="category__pic">
            <img src={mask2} alt="" srcset="" />
          </div>
          <div className="category__pic category__pic-main">
            <img src={mask1} alt="" srcset="" />
          </div>
          <div className="category__pic">
            <img src={mask3} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
