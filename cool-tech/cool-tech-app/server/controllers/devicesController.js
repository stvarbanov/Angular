const router = require('express').Router();

const deviceService = require('../services/deviceService');


router.get('/all', (req, res) => {
    deviceService.getAllDevices()
        .then(data => {
            res.status(201).json(data);
            // console.log(res);
        })
        .catch(err => console.log(err));
});

router.post('/create', (req, res) => {

    console.log('1');

    deviceService.createDevice(req.body)
        .then(data => {
            res.status(201).json({ message: 'Successfully created device!' });
        })
        .catch(err => console.log(err));

})

module.exports = router;