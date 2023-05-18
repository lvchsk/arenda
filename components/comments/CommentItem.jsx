const React = require('react');

function CommentItem ({comment,user}) {
    return (
       
        <div className='comment' style={{display: 'flex', alignItems: 'center'}} data-id={comment.id}>

<div style={{display: 'flex', flexDirection: 'column'}}>
    <h5>{`${comment.date} от : ${comment.user_name}`}</h5>        
<p>{comment.text}</p>
</div>
{user && comment.user_id === user.id && <div className='del-mee' ><button className='update-comment' type='button'>редактировать</button></div>}
{user && comment.user_id === user.id && <button className='delete-comment' type='button'>удалить</button>}
        </div>
       
    )
}

module.exports = CommentItem;