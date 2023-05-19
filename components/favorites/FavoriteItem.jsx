const React = require('react');

function FavoriteItem ({housing, favorite}) {
    return (
        <div className='favorite' data-id={favorite.id}>
<img src={housing.image} className='fav-item fav-img'/>
<h5 className='fav-item'>{housing.name}</h5>
<div style={{display: 'flex', justifyContent: 'end', width: '1000px'}}>
<a href={`/housings/housing/${housing.id}`} class="btn btn-primary" className='fav-item'>Подробнее</a>
<button className='favorite-delete fav-item btn btn-danger' >Удалить</button>
</div>
        </div>
    )
}

module.exports = FavoriteItem;