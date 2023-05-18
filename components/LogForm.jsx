const React = require('react');
const Layout = require('../components/Layout');

function LogForm({title}){
    return (
        <Layout title={title}>
        <div className='container'> 
        <h3>Войти</h3>
     <form id='form-log' action='log' method='POST' data-way='/pers/log'>
     
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
};

module.exports = LogForm;