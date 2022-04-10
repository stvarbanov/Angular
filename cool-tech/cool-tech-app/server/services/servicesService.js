
const Service = require('../models/Service');

const getAllServices = async () => await Service.find();

const createService = async (data) => {

    const newService = data;

    const service = new Service({
        title: newService.title,
        imageUrl: newService.imageUrl,
        description: newService.description
    });

    return service.save();

}

const deleteService = async (serviceId) =>  await Service.findByIdAndDelete(serviceId);

const getOneById = async (serviceId) => await Service.findById(serviceId);

const updateService = async (serviceId, newData) => {
   
    const service = await Service.findById(serviceId);

    service.title = newData.title;
    service.description = newData.description;
    service.imageUrl = newData.imageUrl;

    return service.save();

}

module.exports = {
    getAllServices,
    createService,
    deleteService,
    getOneById,
    updateService

}