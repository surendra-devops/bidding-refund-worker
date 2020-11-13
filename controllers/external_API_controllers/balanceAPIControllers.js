const rp = require('request-promise');
const config = require('../../config/config');

const balanceController = {};

balanceController.getRequest = function getRequest(name, token) {
    try {
        let options = {
            method: 'GET',
            uri: config[process.env.NODE_ENV].balance.url + getURLs(name),
            json: true,
            headers: {
                'Ocp-Apim-Subscription-Key': config[process.env.NODE_ENV].balance.ocpApimSubscriptionKey,
                'authorization': token
            }
        };

        return rp(options);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

balanceController.postRequest = function postRequest(name, body, token) {
    try {
        let options = {
            method: 'POST',
            uri: config[process.env.NODE_ENV].balance.url + postURLs(name),
            json: true,
            body,
            headers: {
                'Ocp-Apim-Subscription-Key':config[process.env.NODE_ENV].balance.ocpApimSubscriptionKey,
                'authorization': token
            } 
        };

        return rp(options);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

function getURLs(name) {
    switch(name) {
        case 'getBalance':
            return '/get/balance';
        default:
            throw Error('Not a get route');
    }
}

function postURLs(name) {
    switch(name) {
        case 'deductBalance':
            return '/deductBalance';
        case 'refundBalance':
            return 'refundBalance';
        default:
            throw Error('Not a post route');
    }
}

module.exports = balanceController;