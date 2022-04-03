const router = require('express').Router();

const { COOKIE_NAME } = require('../config/config');

const authServices = require('../services/authService');

router.get('/:userId', (req, res) => {
 
    authServices.getUserById(req.params.userId)
        .then(data => {
            res.status(201).json({ user: data });
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });
});


module.exports = router;