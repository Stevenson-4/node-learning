var router = require('express').Router();

router.get('/', function (req, res) {
    return res.send('Stevenson');
});

router.post('/user', function (req, res) {
    return res.send('Stevenson son nellli');
});

module.exports = router;