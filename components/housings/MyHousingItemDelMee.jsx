const React = require('react');
const MyHousingItem = require('./MyHousingItem');

function MyHousingItemDelMee ({housing}) {
    return (

<div className='del-mee'>

<MyHousingItem key={housing.id} housing={housing}/>

</div>

    )
}

module.exports = MyHousingItemDelMee;