const React = require('react');
const Layout = require('./Layout');

function Main ({title, user}) {
    return (
        <Layout title={title} user={user}>
        <div id='base-content'>
<h1>this is main</h1>
        </div>
        </Layout>
    )
}

module.exports = Main;