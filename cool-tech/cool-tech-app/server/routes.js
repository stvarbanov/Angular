const router = require('express').Router();

const authController = require('./controllers/authController');
const devicesController = require('./controllers/devicesController');
const requestController = require('./controllers/requestController');
const userController = require('./controllers/userController');
const projectsController = require('./controllers/projectsController');

router.use('/auth', authController);
router.use('/devices', devicesController);
router.use('/request', requestController);
router.use('/users', userController);
router.use('/service', projectsController);
router.use('/project', projectsController);

//TODO:controller for each type

module.exports = router;