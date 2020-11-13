const Models = require('../../models/index');

const eventsController = {};

eventsController.findAll = function findAll(query, order, page, items, attributes) {
    try {
        let options = {where: query};
        if(order) options.order = order;
        else options.order =[['start_time', 'DESC']];

        if(page && items) {
            options.limit = items;
            options.offset = items * (page - 1);
        }
        return Models.bidding_events.findAll(options);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
};

eventsController.findOne = function findOne(query, attributes) {
    try {
        let options = { where: query };
        if(attributes) options.attributes = attributes;
        return Models.bidding_events.findOne(options);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
};

eventsController.update = function update(query, update, t) {
    try {
        if(t) return Models.bidding_events.update(update, {where: query}, t);
        else return Models.bidding_events.update(update, {where: query});
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
}

module.exports = eventsController;