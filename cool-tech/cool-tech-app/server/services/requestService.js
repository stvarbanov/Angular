
const Request = require('../models/Request');
const User = require('../models/User');

const getAllRequests = async () => await Request.find();
const getRequestOfUser = async (userId) => await Request.find({ owner: userId });

const createRequest = async (data) => {
    
    if(data.title ==''){
        throw { errors: 'Title is empty.' };
    }
    if(data.city ==''){
        throw { errors: 'City is empty.' };
    }
    if(data.adress ==''){
        throw { errors: 'adress is empty.' };
    }
    if(data.issue ==''){
        throw { errors: 'Issue is empty.' };
    }

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

const deleteRequest = async (reqId) => await Request.findByIdAndDelete(reqId);

module.exports = {
    getAllRequests,
    createRequest,
    deleteRequest,
    getRequestOfUser
}