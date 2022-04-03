
const Request = require('../models/Request');
const User = require('../models/User');

const getAllRequests = async () => await Request.find();

const createRequest = async (data) => {

    const newRequest = data;

    const ownerId = data.owner.toString();
    const owner = await User.findById(ownerId);

    const request = new Request({
        title: newRequest.title,
        city: newRequest.city,
        adress: newRequest.adress,
        issue: newRequest.issue,
        owner
    });

    return request.save();

}

module.exports = {
    getAllRequests,
    createRequest
}