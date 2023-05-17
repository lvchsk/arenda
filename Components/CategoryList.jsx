const React = require('react');
const CategoryCard = require('./CategoryCard');
const Layout = require('./Layout');

module.exports = function CategoryList ({title,categories}) {
    return (
      <Layout title={title}>
       
      <div className="categories">
      {categories.map(category=><CategoryCard category={category} key={category.id}/>)}
      </div>
      </Layout>
    )
  }