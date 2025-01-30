const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => { 
    //#swagger.tags = ['Users']
    res.send('Hello, world!');
});

router.use('/users', require('./users'));

module.exports = router;