const React = require("react");
const Layout = require("../Layout");
const AddHousingBtn = require("./AddHousingBtn");
const MyHousingItem = require("./MyHousingItem");

function MyHousings({ housings, title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="del-mee form-add-housing-box container">
        <AddHousingBtn />
      </div>

      <div id="base-content">
        {housings.map((housing) => (
          <div className="del-mee">
            <MyHousingItem housing={housing} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = MyHousings;
