import "./CommentBox.css"

const CommentBox = (props) => {
  return (
      <div className="comment-box">
        <h4 className="comment-box__username">{props.username}</h4>
        <hr className="comment-box__horizontal-divider" />
        <p className="comment-box__comment">{props.comment}</p>
      </div>
  );
};

export default CommentBox;
