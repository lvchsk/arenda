const React = require('react');

function FormUpdateComment ({ comment }) {
    return (
<form action="/comment" method="PUT" data-id={comment.id} className="form-update-comment">
<input type="text" value={comment.text} name="text"/>
<button type='submit'>change</button>
</form>
    )
}

module.exports = FormUpdateComment;