const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image1Url: {
        type: String,
        required: true
    },
    image2Url: {
        type: String,
        required: true
    },
    image3Url: {
        type: String,
        required: true
    },
    image4Url: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});



const Project = mongoose.model('Project', projectSchema);

module.exports = Project;