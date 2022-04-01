const router = require('express').Router();

const bodyParser = require('body-parser');
const deviceService = require('../services/deviceService');


router.get('/all', (req, res) => {
    deviceService.getAllDevices()
        .then(data => {
            res.status(201).json(data);
            // console.log(res);
        })
        .catch(err => console.log(err));
});

router.post('/create', bodyParser.json(), (req, res) => {

    console.log('1');

    deviceService.createDevice(req.body)
        .then(data => {
            res.status(201).json({ device: data });
        })
        .catch(err => console.log(err));

})

module.exports = router;