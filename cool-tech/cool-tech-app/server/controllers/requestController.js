const router = require('express').Router();
const requestService = require('../services/requestService');


router.get('/all', (req, res) => {
    requestService.getAllRequests()
        .then(data => {
            res.status(201).json(data);
            // console.log(res);
        })
        .catch(err => console.log(err));
});

router.post('/create', (req, res) => {

    requestService.createRequest(req.body)
        .then(data => {
            res.status(201).json({ request: data });
        })
        .catch(err => console.log(err));

})
router.delete('/delete/:reqId', (req, res) => {


    requestService.deleteRequest(req.params.reqId)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => console.log(err));

})

//TODO add update



module.exports = router;