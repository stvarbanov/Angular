const router = require('express').Router();
const requestService = require('../services/requestService');


router.get('/all', (req, res) => {
    requestService.getAllRequests()
        .then(data => {
            res.status(201).json(data);
            // console.log(res);
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });
});
router.get('/user/:userId', (req, res) => {
    requestService.getRequestOfUser(req.params.userId)
        .then(data => {
            res.status(201).json(data);
            // console.log(res);
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });
});

router.post('/create', (req, res) => {

    requestService.createRequest(req.body)
        .then(data => {
            res.status(201).json({ request: data });
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });

})
router.delete('/delete/:reqId', (req, res) => {


    requestService.deleteRequest(req.params.reqId)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });

})

//TODO add update



module.exports = router;