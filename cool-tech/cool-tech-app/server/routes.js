const router = require('express').Router();

const authController = require('./controllers/authController');
const devicesController = require('./controllers/devicesController');

router.use('/auth', authController);
router.use('/devices', devicesController);

//TODO:controller for each type

module.exports = router;