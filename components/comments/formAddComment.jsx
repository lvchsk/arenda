const React = require('react');

function FormAddComment () {
    return (
<form action="/comment" method="PUT" className='form-add-comment'>
<input type="text"  name="text"/>
<button type='submit'>add</button>
</form>
    )
}

module.exports = FormAddComment;