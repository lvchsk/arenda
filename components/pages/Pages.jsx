const React = require('react');
const PageItem = require('./PageItem');

function Pages({pages}){
    return (
        <nav aria-label="Page navigation example" style={{marginTop: '70px'}}>
  <ul className="pagination">

{pages.map(page => <PageItem page={page}/>)}

    {/* <li className="page-point"><a className="page-link" href="up">Next</a></li> */}
    
  </ul>
</nav>
    )
}

module.exports = Pages;