const React = require('react');
const Layout = require('../components/Layout');

function Regform({title}){
    return (
<Layout title={title}>
   <div className='container'> 
   <h3>Зарегистрироваться</h3>
<form id='form-reg' action='reg' method='POST' data-way='/pers/reg'>

  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="name" class="form-control" id="name" aria-describedby="name" name='name'/>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='password'/>
  </div>

 

  <button type="submit" class="btn btn-primary">Submit</button>

</form>
<h3 id='error'></h3>
</div>
</Layout>
    )
}


module.exports = Regform;