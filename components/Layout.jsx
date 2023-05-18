const React = require('react');
const NavBar = require('./NavBar');

  function Layout({ title, children, user}) {

return (

<html lang="en">
<head>
<title>{title}</title>
<link rel="stylesheet" href="/css/style.css" />
<script defer src="/scripts/getForm.script.js" />
<script defer src="/scripts/housingUpdate.js" />
<script defer src="/scripts/housingsDelete.js" />
<script defer src="/scripts/comment.js" />
<script defer src="/scripts/housingAdd.js" />
<script defer src="/scripts/favorites.js" />
<script defer src="/scripts/likes.js" />
<script defer src="/scripts/select.js" />

<link 
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" 
rel="stylesheet"
integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" 
crossOrigin="anonymous">
</link>

</head>
<body style={{backgroundColor: 'blue'}}>

<NavBar user={user}/>

<div id='for-form' className='container'></div>


    {children}
   

    </body>


</html>

);
};

module.exports = Layout;