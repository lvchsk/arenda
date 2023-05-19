const React = require("react");

function CommentItem({ comment, user }) {
  return (
    <div className="comment" data-id={comment.id}>
      <div>
        <h5>{`${comment.date} от : ${comment.user_name}`}</h5>
        <p>{comment.text}</p>
      </div>
      {user && comment.user_id === user.id && (
        <div className="del-mee" style={{marginLeft: '300px'}}>
          <button className="update-comment btn btn-light" type="button">
            Редактировать
          </button>
        </div>
      )}
      {user && comment.user_id === user.id && (
        <button className="delete-comment btn btn-danger" type="button" style={{marginLeft: '10px'}}>
          Удалить
        </button>
      )}
    </div>
  );
}

module.exports = CommentItem;
