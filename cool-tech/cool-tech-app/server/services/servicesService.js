
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

module.exports = {
    getAllServices,
    createService,
    deleteService
}