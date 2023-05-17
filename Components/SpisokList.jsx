const React = require('react');
const Layout = require('./Layout');
const SpisokCard = require('./SpisokCard');

module.exports = function SpisokList ({title,spisokList}) {
    console.log(spisokList)
    return (
      <Layout title={title}>
      <div className="spisok">
      {spisokList.map(spisok=><SpisokCard spisok={spisok} key={spisok.id}/>)}
      </div>
      </Layout>
    )
  }