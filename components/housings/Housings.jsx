const React = require('react');
const Layout = require('../Layout');
const HousingItem = require('./HousingItem');
const Pages = require('../pages/Pages');

function Housings ({housings, title, pages, user}) {
    return (
<Layout title={title} user={user}>
        {/* <div style={{display: 'flex', flexDirection: 'column'}}> */}
        <div id='base-content'>
        <div className='housings'>
{housings.map(housing => <HousingItem key={housing.id}  housing={housing} user={user}/> )}
        </div>
        
        <Pages pages={pages}/>
        </div>
        {/* </div>  */}
</Layout>       
    )
}

module.exports = Housings;