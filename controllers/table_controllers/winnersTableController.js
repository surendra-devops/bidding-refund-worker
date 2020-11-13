const Models = require('../../models/index');

const winners = {};

winners.findAll = function findAll(query, order, page, items, attributes) {
    try {
        let options = {where: query};
        if(order) options.order = order;

        if(page && items) {
            options.limit = items;
            options.offset = items * (page - 1);
        }
        return Models.bid_winners.findAll(options);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
};

winners.findOne = function findOne(query, attributes) {
    try {
        let options = { where: query };
        if(attributes) options.attributes = attributes;
        return Models.bid_winners.findOne(options);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
};

winners.update = function update(query, update) {
    try {
        return Models.bid_winners.update(update, {where: query});
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
};

winners.create = function create(obj) {
    try {
        return Models.bid_winners.create(obj);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
}

winners.bulkCreate = function bulkCreate(arr, t) {
    try {
        if(t) return Models.bid_winners.bulkCreate(arr, t);
        else return Models.bid_winners.bulkCreate(arr);
    } catch (error) {
        console.log("Error: ", error);
        throw error;
    }
}

module.exports = winners;