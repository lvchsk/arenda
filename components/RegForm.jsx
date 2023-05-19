const React = require("react");
const Layout = require("../components/Layout");

function Regform({ title }) {
  return (
    <Layout title={title}>
      <div classNameName="container">
        <h3>Регистрация</h3>
        <form id="form-reg" action="reg" method="POST" data-way="/pers/reg">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Имя
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              aria-describedby="name"
              name="name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Пароль
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Зарегистрироваться
          </button>
        </form>
        <h3 id="error"></h3>
      </div>
    </Layout>
  );
}

module.exports = Regform;
