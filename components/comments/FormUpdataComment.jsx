const React = require('react');

function FormUpdateComment ({ comment }) {
    return (
<form action="/comment" method="PUT" data-id={comment.id} className="form-update-comment">
<input type="text" value={comment.text} name="text"/>
<button className='btn btn-info' type='submit' style={{marginTop: '5px'}}>Cохранить</button>
</form>
    )
}

module.exports = FormUpdateComment;