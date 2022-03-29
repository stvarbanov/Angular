
const Device = require('../models/Device');

const getAllDevices = async () => await Device.find();
// const getAllDevices = async () => {


// //     let device = new Device({

// //         brand: 'test1',
// //         class: 'test1',
// //         model: 'test1',
// //         price: 'test1',
// //         imageUrl: 'test1',
// //         description: 'test1'

// //     });
// //    return device.save();

// }
module.exports = {
    getAllDevices
}