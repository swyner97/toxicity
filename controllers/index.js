const router = require('express').Router();
const htmlRoutes = require('./html-routes');
// const projectRoutes = require('./projectRoutes');

router.use('/', htmlRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;