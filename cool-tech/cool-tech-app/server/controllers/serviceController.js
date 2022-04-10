const router = require('express').Router();
const servicesService = require('../services/servicesService.js');


router.get('/all', (req, res) => {
    servicesService.getAllServices()
        .then(data => {
            res.status(201).json(data);
            // console.log(res);
        })
        .catch(err => console.log(err));
});

router.post('/create', (req, res) => {

    servicesService.createService(req.body)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => console.log(err));

})

router.delete('/delete/:serviceId', (req, res) => {


    servicesService.deleteService(req.params.serviceId)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => console.log(err));

})

router.get('/:serviceId', (req, res) => {

    servicesService.getOneById(req.params.serviceId)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => console.log(err));

})

router.post('/update/:serviceId', (req, res) => {

    
    servicesService.updateService(req.params.serviceId, req.body)
        .then(data => {
            res.status(201).json({ device: data });
        })
        .catch(err => console.log(err));

})



module.exports = router;