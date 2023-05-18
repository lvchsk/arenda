const React = require('react');
const SelectItem = require('./SelectItem');


function Selects({ housings, user}) {
    return (
<>
{housings.map(housing => <SelectItem housing={housing} key={housing.id} user={user}/>)}
</>
    )
}

module.exports = Selects;