const React = require('react');

function FormAddHousing () {
    return (
<form className='form-add-housing' action='/housings' method='POST'>


<div>
    <p>выберите тип жилья</p>
<select name="select" className='select'>
    <option value="room">комната</option>
    <option value="house">дом</option>
    <option value="apartment">квартира</option>
</select>
</div>


  <div className="mb-3">
    <label for="text" className="form-label">адрес</label>
    <input type="text" className="form-control"  name='address'/>
  </div>

  <div className="mb-3">
    <label for="text" className="form-label">название</label>
    <input type="text" className="form-control"  name='name'/>
  </div>

  <div className="mb-3">
    <label for="text" className="form-label">описание</label>
    <input type="text" className="form-control" name='info'/>
  </div>

  <div className="mb-3">
  <label className="text" >фото</label>
    <input type="text" className="form-control" name='image'/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
<h1></h1>
</form>
  
    )
}

module.exports = FormAddHousing;