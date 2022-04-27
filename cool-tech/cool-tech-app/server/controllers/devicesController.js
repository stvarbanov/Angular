const router = require('express').Router();
const deviceService = require('../services/deviceService');


router.get('/all', (req, res) => {
    deviceService.getAllDevices()
        .then(data => {
            res.status(201).json(data);
            // console.log(res);
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });
});

router.post('/create', (req, res) => {

    deviceService.createDevice(req.body)
        .then(data => {
            res.status(201).json({ device: data });
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });

})

router.delete('/delete/:deviceId', (req, res) => {


    deviceService.deleteDevice(req.params.deviceId)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });

})

router.get('/:deviceId', (req, res) => {

    deviceService.getOneById(req.params.deviceId)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(error => res.json(error));

})

router.post('/update/:deviceId', (req, res) => {


    deviceService.updateDevice(req.params.deviceId, req.body)
        .then(data => {
            res.status(201).json({ device: data });
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });

})



module.exports = router;