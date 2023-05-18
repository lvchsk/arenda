const React = require('react');
const CommentAddBtn = require('../comments/CommentAddBtn');
const Comments = require('../comments/Comments');
const Layout = require('../Layout');

function HousingAbout ({housing, title, user, comments}) {

    return (
        
        <Layout title={title} user={user}>
<div id='base-content'>
   <div style={{display: 'flex'}} className="about-housing" data-id={housing.id}>    

<div className="card" style={{width: '18rem', marginLeft: '50px'}} data-id={housing.id}>
  <img src={housing.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">{housing.type}</h2>
    <p>{`название: ${housing.name}`}</p>
    <p>{housing.address}</p>
    <h5>о жилье : </h5>

    <p style={{fontStyle: 'italic'}}>{housing.info}</p>

      <p className="housing-text">{`пренадлежит юзеру : ${housing.User.name}`}</p> 
      <p>{`лйков : ${housing.Likes.length}`}</p>
  </div>

  <div className='del-mee'>
   {user && <CommentAddBtn housing={housing}/>}
  </div>

</div>


<Comments comments={comments} user={user}/>


</div>
</div>
    </Layout>
    )
}

module.exports = HousingAbout;