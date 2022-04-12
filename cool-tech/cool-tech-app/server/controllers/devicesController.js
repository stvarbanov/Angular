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
            res.status(201).json({ device: data, message:'You added a device!' });
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
        .catch(err => console.log(err));

})



module.exports = router;