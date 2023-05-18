const React = require('react');

function CommentAddBtn ({housing}) {
    return (
<button type="button" data-id={housing.id} className="comment-add-btn" >add comment</button>
        )
}

module.exports = CommentAddBtn;