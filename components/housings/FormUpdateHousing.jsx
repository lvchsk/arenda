const React = require('react');

function FormUpdateHousing ({housing}) {
    return (

<form data-id={housing.id} className="form-housing-update">
<div>
    <p>выберите тип жилья</p>
<select name="select" defaultValue={housing.type} className='select'>
    <option value="room">комната</option>
    <option value="house">дом</option>
    <option value="apartment">квартира</option>
</select>
</div>
    <h5 style={{color: 'red'}}></h5>
    <label>адрес</label>
    <input type="text" name='address' value={housing.address}/>
    <label>название</label>
    <input type="text" name='name' value={housing.name}/>
    <label>фото</label>
    <input type="text" name='image' value={housing.image}/>
    <label>описание</label>
    <input type="text" name='info' value={housing.info}/>

<button type='submit' >change</button>
</form>

    )
}

module.exports = FormUpdateHousing;