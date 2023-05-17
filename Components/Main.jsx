const React = require("react");
const Layout = require("./Layout");

function Main({ title,user }) {
  return (
    <Layout title={title} user={user}>
    <div className="card" style={{ width: "18rem" }}>
      MAIN MAIN
    </div>
    </Layout>
  );
}

module.exports = Main;
