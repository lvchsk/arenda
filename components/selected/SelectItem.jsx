const React = require('react');

function SelectItem ({housing, user}) {

let favOk = [];
let likeOk = [];

if(user) {
 favOk = housing.Favorites.filter(e => e.user_id === user.id);
 likeOk = housing.Likes.filter(e => e.user_id === user.id);
};

    return (
<div className='housing-box' data-id={housing.id} style={{marginTop: '150px'}}>
<div className="card" style={{width: '20rem'}}>
  <img src={housing.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{housing.type}</h5>
    <p>{`название: ${housing.name}`}</p>
    <p>{housing.address}</p>
      <p className="housing-text">{`пренадлежит юзеру : ${housing.User.name}`}</p> 
      <p>{`комментариев : ${housing.Comments.length}`}</p>

      <div style={{display: 'flex'}} className='like-box'>
       <div style={{display: 'flex'}}><p>Лайков:</p><p style={{marginLeft: '5px'}}>{`${housing.Likes.length}`}</p></div>
      {user && !likeOk.length && housing.user_id !== user.id &&
       <button type='button' className='add-like'>i like</button>}
      </div>

      <a href={`/housings/housing/${housing.id}`} class="btn btn-primary">Подробнее</a>
      {!favOk.length  && user ? <button className='add-favorite'>Добавить в избранное</button> : false}
      {/* {user && user.id === housing.User.id && <button className='delete-housing-btn' type='button'>delete</button>} */}
  </div>
</div>
</div>

    )
}

module.exports = SelectItem;