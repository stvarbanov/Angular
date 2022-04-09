
const Device = require('../models/Device');

const getAllDevices = async () => await Device.find();

const createDevice = async (data) => {

    const newDevice = data;

    const device = new Device({
        model: newDevice.model,
        brand: newDevice.brand,
        class: newDevice.class,
        price: newDevice.price,
        description: newDevice.description,
        imageUrl: newDevice.imageUrl
    });

    return device.save();

}

const deleteDevice = async (deviceId) => await Device.findByIdAndDelete(deviceId);


const getOneById = async (deviceId) => await Device.findById(deviceId);

module.exports = {
    getAllDevices,
    createDevice,
    deleteDevice,
    getOneById
}