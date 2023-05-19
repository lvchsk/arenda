const React = require("react");

function FormAddHousing() {
  return (
    <form className="form-add-housing" action="/housings" method="POST">
      <div style={{ marginBottom: "20px" }}>
        <p>Выберите тип жилья</p>
        <select name="select" className="select">
          <option value="room">Комната</option>
          <option value="house">Дом</option>
          <option value="apartment">Квартира</option>
        </select>
      </div>

      <div className="mb-3">
        <label for="text" className="form-label">
          Адрес
        </label>
        <input type="text" className="form-control" name="address" />
      </div>

      <div className="mb-3">
        <label for="text" className="form-label">
          Название
        </label>
        <input type="text" className="form-control" name="name" />
      </div>

      <div className="mb-3">
        <label for="text" className="form-label">
          Описание
        </label>
        <input type="text" className="form-control" name="info" />
      </div>

      <div className="mb-3">
        <label className="text">Фото</label>
        <input type="text" className="form-control" name="image" />
      </div>

      <button type="submit" className="btn btn-primary">
        Сохранить
      </button>
      <h1></h1>
    </form>
  );
}

module.exports = FormAddHousing;
