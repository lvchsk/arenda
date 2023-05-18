const React = require('react');
const CommentItem = require('./CommentItem');

function Comments ({comments, user}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '300px', width: '600px'}}>
        <h3>комментарии к этой карточке :</h3>
        <div className='comments-box' >
{comments.map(comment => <div className='del-mee'><CommentItem key={comment.id} comment={comment} user={user}/></div>)}
        </div>
        </div>
    )
}

module.exports = Comments;