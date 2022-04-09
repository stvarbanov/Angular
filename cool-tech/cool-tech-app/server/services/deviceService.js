
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

const updateDevice = async (deviceId, newData) => {

    console.log(newData);
    
    const device = await Device.findById(deviceId);

    device.model = newData.model;
    device.brand = newData.brand;
    device.class = newData.class;
    device.price = newData.price;
    device.description = newData.description;
    device.imageUrl = newData.imageUrl;

    return device.save();

}

module.exports = {
    getAllDevices,
    createDevice,
    deleteDevice,
    getOneById,
    updateDevice
}