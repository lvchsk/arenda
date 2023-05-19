const React = require("react");

function FormAddComment() {
  return (
    <form action="/comment" method="PUT" className="form-add-comment">
      <input type="text" name="text" style={{marginBottom: '10px', marginLeft: '5px'}} />
      <button type="submit" className="btn btn-info" style={{marginBottom: '10px'}}>
        Добавить
      </button>
    </form>
  );
}

module.exports = FormAddComment;
