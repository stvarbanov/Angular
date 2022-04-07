const router = require('express').Router();

const authController = require('./controllers/authController');
const devicesController = require('./controllers/devicesController');
const requestController = require('./controllers/requestController');
const userController = require('./controllers/userController');
const servicesController = require('./controllers/serviceController');
const projectsController = require('./controllers/projectsController');

router.use('/auth', authController);
router.use('/devices', devicesController);
router.use('/request', requestController);
router.use('/users', userController);
router.use('/service', servicesController);
router.use('/project', projectsController);

module.exports = router;
