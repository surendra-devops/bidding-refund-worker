const Models = require('../../models/index');

const bids = {};

bids.create = function create(obj) {
    try {
        return Models.user_bids.create(obj);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
};

bids.bulkCreate = function bulkCreate(arr, t) {
    try {
        if(t) return Models.user_bids.bulkCreate(arr, t);
        else return Models.user_bids.bulkCreate(arr);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
}

module.exports = bids;