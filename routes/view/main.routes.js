const router = require('express').Router();
const Main = require('../../components/Main');


router.route('/')
.get((req, res) => {
    //const d = new Date().toLocaleString()
 res.renderComponent(Main, {title: 'main', user: req.session.user})
});

module.exports = router;