const React = require("react");
const CommentItem = require("./CommentItem");

function CommentItemDelMee({ comment, user }) {
  return (
    <div className="del-mee">
      <CommentItem comment={comment} user={user} key={comment.id} />
    </div>
  );
}

module.exports = CommentItemDelMee;
