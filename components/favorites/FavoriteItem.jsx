const React = require('react');

function FavoriteItem ({housing, favorite}) {
    return (
        <div className='favorite' data-id={favorite.id}>
<img src={housing.image} style={{width: '50px', height: '50px'}} className='fav-item'/>
<h5 className='fav-item'>{housing.name}</h5>
<div style={{display: 'flex', justifyContent: 'end', width: '1000px'}}>
<a href={`/housings/housing/${housing.id}`} class="btn btn-primary" className='fav-item'>подробнее</a>
<button className='favorite-delete fav-item' >delete</button>
</div>
        </div>
    )
}

module.exports = FavoriteItem;