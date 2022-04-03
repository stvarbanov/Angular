const router = require('express').Router();

const authController = require('./controllers/authController');
const devicesController = require('./controllers/devicesController');
const requestController = require('./controllers/requestController');

router.use('/auth', authController);
router.use('/devices', devicesController);
router.use('/request', requestController);

//TODO:controller for each type

module.exports = router;