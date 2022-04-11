
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

const getOneById = async (projectId) => await Project.findById(projectId);

const updateProject = async (projectId, newData) => {
   
    const project = await Project.findById(projectId);

    project.title = newData.title;
    project.description = newData.description;
    project.image1Url = newData.image1Url;
    project.image2Url = newData.image2Url;
    project.image3Url = newData.image3Url;
    project.image4Url = newData.image4Url;

    return project.save();

}

module.exports = {
    getAllProjects,
    createProject,
    deleteProject,
    getOneById,
    updateProject
}