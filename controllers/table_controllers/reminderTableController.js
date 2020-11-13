const Models = require('../../models/index');

const reminderController = {};

reminderController.findAll = function findAll(query, order, page, items, attributes) {
    try {
        let options = {where: query};
        if(order) options.order = order;
        else options.order =[['start_time', 'DESC']];

        if(page && items) {
            options.limit = items;
            options.offset = items * (page - 1);
        }
        return Models.bidding_reminder.findAll(options);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
};

reminderController.findOne = function findOne(query, attributes) {
    try {
        let options = { where: query };
        if(attributes) options.attributes = attributes;
        return Models.bidding_reminder.findOne(options);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
};

reminderController.create  = function create(obj) {
    try {
        return Models.bidding_reminder.create(obj);
    } catch (error) {
        console.log('Error: ', error);
        throw error;
    }
}

module.exports = reminderController;