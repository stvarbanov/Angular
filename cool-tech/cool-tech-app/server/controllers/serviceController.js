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

//TODO add update

//TODO add delete


module.exports = router;