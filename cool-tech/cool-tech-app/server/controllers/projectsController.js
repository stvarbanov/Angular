const router = require('express').Router();
const projectService = require('../services/projectService');


router.get('/all', (req, res) => {
    projectService.getAllProjects()
        .then(data => {
            res.status(201).json(data);
            // console.log(res);
        })
        .catch(err => console.log(err));
});

router.post('/create', (req, res) => {

    projectService.createProject(req.body)
        .then(data => {
            res.status(201).json({ project: data });
        })
        .catch(err => console.log(err));

})

router.delete('/delete/:projectId', (req, res) => {


    projectService.deleteProject(req.params.projectId)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => console.log(err));

})

router.get('/:projectId', (req, res) => {

    projectService.getOneById(req.params.projectId)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => console.log(err));

})

router.post('/update/:projectId', (req, res) => {

    
    projectService.updateProject(req.params.projectId, req.body)
        .then(data => {
            res.status(201).json({ device: data });
        })
        .catch(err => console.log(err));

})





module.exports = router;