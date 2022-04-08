
const Project = require('../models/Project');


const getAllProjects = async () => await Project.find();

const createProject = async (data) => {

    const newProject = data;

    const project = new Project({
        title: newProject.title,
        description: newProject.description,
        image1Url: newProject.image1Url,
        image2Url: newProject.image2Url,
        image3Url: newProject.image3Url,
        image4Url: newProject.image4Url

    });

    return project.save();

}

const deleteProject = async (projectId) =>  await Project.findByIdAndDelete(projectId);


module.exports = {
    getAllProjects,
    createProject,
    deleteProject
}