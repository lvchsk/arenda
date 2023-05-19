const React = require("react");

function FormUpdateHousing({ housing }) {
  return (
    <form data-id={housing.id} className="form-housing-update">
      <div>
        <p>Выберите тип жилья</p>
        <select name="select" defaultValue={housing.type} className="select">
          <option value="room">Комната</option>
          <option value="house">Дом</option>
          <option value="apartment">Квартира</option>
        </select>
      </div>
      <h5 style={{ color: "red" }}></h5>
      <label>Адрес</label>
      <input type="text" name="address" value={housing.address} />
      <label>Название</label>
      <input type="text" name="name" value={housing.name} />
      <label>Фото</label>
      <input type="text" name="image" value={housing.image} />
      <label>Описание</label>
      <input type="text" name="info" value={housing.info} />

      <button type="submit" className="btn btn-info">
        Сохранить
      </button>
    </form>
  );
}

module.exports = FormUpdateHousing;
