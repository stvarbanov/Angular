const router = require('express').Router();

const authController = require('./controllers/authController');
const devicesController = require('./controllers/devicesController');
const requestController = require('./controllers/requestController');
const userController = require('./controllers/userController');
const serviceController = require('./controllers/serviceController');

router.use('/auth', authController);
router.use('/devices', devicesController);
router.use('/request', requestController);
router.use('/users', userController);
router.use('/service', serviceController);

//TODO:controller for each type

module.exports = router;