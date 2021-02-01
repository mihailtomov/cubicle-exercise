const Accessory = require('../models/Accessory');

function getAll() {
    return Accessory.find().lean();
}

function getAllUnattached(ids) {
    return Accessory.find({ _id: { $nin: ids } }).lean();
}

function create(data) {
    const accessory = new Accessory(data);

    return accessory.save();
}

module.exports = {
    getAll,
    create,
    getAllUnattached,
}