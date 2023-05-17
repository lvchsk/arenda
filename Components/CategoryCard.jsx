const React = require("react");

module.exports = function CategoryCard({ category }) {
  // console.log(footballer);
  return (
    <a href={`/category/${category.id}`}>
    <div class="card" style={{ width: "18rem" }} data-id={category.id}>
      <img src={category.url} class="card-img-top" alt="..." />      
      <h5 className='card-title'>{category.name}</h5>    
    </div>
    </a>
  );
};
