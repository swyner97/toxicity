const router = require('express').Router();
const { User } = require('../models');
router.get('/', async (req,res) => {
    res.send('Hello World')
})

module.exports = router;