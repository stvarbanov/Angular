const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});



const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;