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

    deviceService.createDevice(req.body)
        .then(data => {
            res.status(201).json({ device: data });
        })
        .catch(err => console.log(err));

})

router.delete('/delete/:deviceId', (req, res) => {


    deviceService.deleteDevice(req.params.deviceId)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => console.log(err));

})

//TODO add update

//TODO add delete


module.exports = router;