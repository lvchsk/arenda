const React = require("react");

function CommentAddBtn({ housing }) {
  return (
    <div className="add-comm">
    <button type="button" data-id={housing.id} className="comment-add-btn btn btn-light">
      Добавить комментарий
    </button>
    </div>
  );
}

module.exports = CommentAddBtn;
