const Models = require('../../models/index');

const share = {};

share.create = function create(obj) {
    try {
        return Models.share_bids.create(obj);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
};

share.findOne = function findOne(query, attributes) {
    try {
        let options = { where: query };
        if(attributes) options.attributes = attributes;
        return Models.share_bids.findOne(options);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
};

module.exports = share;