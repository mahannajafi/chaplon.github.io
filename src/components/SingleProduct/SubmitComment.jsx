import "./SubmitComment.css";
import closeIcon from "../../assets/imgs/closeIcon.png";
import { useState } from "react";

const SubmitComment = (props) => {
  const [username, setUsername] = useState("");
  const [userComment, setUserComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, userComment);
  };

  return props.trigger === true ? (
    <div className="submit-comment">
      <div className="submit-comment__header">
        <h3 className="submit-comment__header__title">ثبت دیدگاه</h3>
        <button
          className="submit-comment__header__close-btn"
          onClick={() => props.setTrigger(false)}
        >
          <img src={closeIcon} alt="" srcset="" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="submit-comment__form">
        <label className="submit-comment__form__username">
          نام کاربری :
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="submit-comment__form__username__input"
          />
        </label>

        <label className="submit-comment__form__user-comment">
          متن دیدگاه :
          <textarea
            value={userComment}
            onChange={(event) => setUserComment(event.target.value)}
            className="submit-comment__form__user-comment__input"
          />
        </label>

        <button
          type="submit"
          onClick={() => props.setTrigger(false) & console.log("Submit Form")} // TODO: submit form
          className="submit-comment__form__submit-btn"
        >
          ثبت
        </button>
      </form>
    </div>
  ) : null;
};

export default SubmitComment;
