const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    requests: [{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Request'
    }],
    isAdmin: {
        type: Boolean,
        default: false,
        required: false
    }

});


const User = mongoose.model('User', userSchema);

module.exports = User;