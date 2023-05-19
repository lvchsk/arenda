const React = require('react');
const Layout = require('./Layout');

function Main ({title, user}) {
    return (
        <Layout title={title} user={user}>
        <div id='base-content'>
<h1 style={{color: 'white'}}>Добро пожаловать на сайт поиска жилья "Циан-id"!!</h1>
        </div>
        </Layout>
    )
}

module.exports = Main;