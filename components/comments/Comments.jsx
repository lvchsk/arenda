const React = require("react");
const CommentItem = require("./CommentItem");

function Comments({ comments, user }) {
  return (
    <div className="comms">
      <h3 style={{color: 'white'}}>Комментарии:</h3>
      <div className="comments-box">
        {comments.map((comment) => (
          <div className="del-mee">
            <CommentItem key={comment.id} comment={comment} user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

module.exports = Comments;
