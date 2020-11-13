const Models = require('../../models/index');

const productsController = {};

productsController.findAll = function findAll(query, order, page, items, attributes) {
    try {
        let options = {where: query};
        if(order) options.order = order;
        else options.order =[['start_time', 'DESC']];

        if(page && items) {
            options.limit = items;
            options.offset = items * (page - 1);
        }
        return Models.bid_products.findAll(options);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
};

productsController.findOne = function findOne(query, attributes) {
    let options = { where: query };
    if(attributes) options.attributes = attributes;
    return Models.bid_products.findOne(options);
};

module.exports = productsController;