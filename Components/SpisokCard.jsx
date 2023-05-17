const React = require("react");


module.exports = function SpisokCard({ spisok }) {
 
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={spisok.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{spisok.name}</h5>
        <p className="card-text">{spisok.info}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{spisok.price}</li>
        <li className="list-group-item">{spisok.map}</li>
      </ul>
    </div>
  );
};
