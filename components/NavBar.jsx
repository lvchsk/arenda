const React = require("react");
const Layout = require("./Layout");

function NavBar({ title, user }) {
  return (
    <div
      id="nav-bar"
      className="navbar navbar-expand-lg bg-primary"
      data-bs-theme="dark"
    >
      {user && (
        <div className="hello">
          <h4 id="hi" className="nav-item">{`Привет, ${user.name}!`}</h4>
        </div>
      )}

      <a href="/" className="nav-item navbar-brand">
        ЦИАН-iD
      </a>
      <a href="/" className="nav-item navbar-brand">
        Главная
      </a>
      <a href="/housings/1" className="nav-item navbar-brand">
        Жильё
      </a>
      {user ? (
        <a href="/housings/my/housings" className="nav-item navbar-brand">
          Моё жильё
        </a>
      ) : (
        <a
          className="nav-item navbar-brand"
          href="#"
          style={{ color: "red", cursor: "default" }}
        >
          Войдите или зарегистрируйтесь!
        </a>
      )}
      {user && (
        <a href="/favorite" className="nav-item navbar-brand">
          Избранное
        </a>
      )}

      {user && (
        <div className="select-type nav-item" style={{display: 'flex', flexDirection: 'row'}}>
          <p style={{marginRight: '20px', marginTop: '10px'}} className="navbar-brand">Выберите тип жилья:</p>
          <select name="select" className="select">
            <option value="room">Комната</option>
            <option value="house">Дом</option>
            <option value="apartment">Квартира</option>
          </select>
        </div>
      )}

      <div id="pers" className="logreg">
        {user ? (
          <button type="button" className="btn btn-light">
            <a className="pers-item" id="user-out" href="/pers/logout">
              Выйти
            </a>
          </button>
        ) : (
          <button type="button" className="btn btn-light">
            <a className="pers-item" id="user-in" href="/pers/log">
              Войти
            </a>
          </button>
        )}
        <button type="button" className="btn btn-light">
          <a className="pers-item" id="reg" href="/pers/reg">
            Зарегистрироваться
          </a>
        </button>
      </div>
    </div>
  );
}

module.exports = NavBar;
