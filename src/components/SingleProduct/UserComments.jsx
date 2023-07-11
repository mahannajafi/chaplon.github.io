import "./UserComments.css";
import textBoxIcon from "../../assets/imgs/textbox.png";
import CommentBox from "./CommentBox";
import SubmitComment from "./SubmitComment";
import { useState } from "react";

const UsersComments = () => {
  const [commentWindowPopup, setCommentWindowPopup] = useState(false);

  return (
    <div dir="rtl" className="users-comments">
      <div className="users-comments__header">
        <img
          src={textBoxIcon}
          alt=""
          srcset=""
          className="users-comments__header__icon"
        />
        <h2 className="users-comments__header__title">دیدگاه کاربران</h2>
      </div>

      <hr className="users-comments__horizontal-divider" />

      <div className="users-comments__submit-comment">
        <p className="users-comments__submit-comment__paragraph">
          شما هم دیدگاه خود را ثبت کنید.
        </p>
        <button
          className="users-comments__submit-comment__btn"
          onClick={() => setCommentWindowPopup(true)}
        >
          ثبت دیدگاه
        </button>
        <SubmitComment
          trigger={commentWindowPopup}
          setTrigger={setCommentWindowPopup}
        />
      </div>

      <div className="users-comments__comment-section">
        <CommentBox
          username="نام کاربری"
          comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد."
        />
        <CommentBox
          username="نام کاربری"
          comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد."
        />
      </div>
    </div>
  );
};

export default UsersComments;
