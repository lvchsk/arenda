const React = require("react");
const Layout = require("../Layout");
const FavoriteItem = require("./FavoriteItem");

function Favorites({ favorites, user, title }) {
  return (
    <Layout user={user} title={title}>
      <div id="base-content">
        <div className="favHouses">
          {favorites.map((favorite) => (
            <FavoriteItem
              key={favorite.Housing.id}
              housing={favorite.Housing}
              favorite={favorite}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Favorites;
