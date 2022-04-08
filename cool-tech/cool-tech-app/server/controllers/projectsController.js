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


//TODO add update



module.exports = router;