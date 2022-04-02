const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true
    },
    owner: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
}, {
    timestamps: true
});



const Request = mongoose.model('Request', requestSchema);

module.exports = Request;