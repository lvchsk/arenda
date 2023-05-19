const React = require('react');

function PageItem({page}){
    return (

             <>
             {page.active &&
            <li className="page-point active" aria-current="page">
            <a className="page-link" href={`/housings/${page.num}`}>{page.num}</a>
            </li>
             }
              {!page.active &&
            <li className="page-point" aria-current="page">
            <a className="page-link" href={`/housings/${page.num}`}>{page.num}</a>
            </li>
             }
            </>
        
    )
}

module.exports = PageItem;