const React = require('react');

function MyHousingItem ({housing}) {
    return (

<div className="card housing-box" style={{marginTop: '50px'}} data-id={housing.id}>
<div  style={{width: '20rem'}}>
  <img src={housing.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{housing.type}</h5>
    <p>{`название: ${housing.name}`}</p>
    <p>{housing.address}</p>
      <p className="housing-text">{`пренадлежит юзеру : ${housing.User.name}`}</p> 
      <p>{`лйков : ${housing.Likes.length}`}</p>
      <p>{`комментариев : ${housing.Comments.length}`}</p>

      <a href={`/housings/housing/${housing.id}`} class="btn btn-primary">подробнее</a>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <div className='del-mee' style={{display: 'flex', flexDirection: 'column'}}>
      <button className='updateHousing'>update</button>
      </div>
      <button className='delete-housing-btn' type='button'>delete</button>
      </div>
  </div>
</div>
<h3 className='err'></h3>
</div>

    )
}

module.exports = MyHousingItem;