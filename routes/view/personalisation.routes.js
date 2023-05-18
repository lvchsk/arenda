const router = require('express').Router();
const RegForm = require('../../components/RegForm');
const LogForm = require('../../components/LogForm');


router.route('/log')
.get((req, res) => {
    res.renderComponent(LogForm, {title: 'Loginisation'});
})

router.route('/logout')
.get((req, res) => {
    res.clearCookie('user_sid');
    res.redirect('/');
})

router.route('/reg')
.get((req, res) => {
    res.renderComponent(RegForm, {title: 'Registration'});
})

module.exports = router;