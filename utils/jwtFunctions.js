'use strict';

const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const jwtVerify = {};

jwtVerify.createJWT = function createJWT(user_id) {
    return jwt.sign({user_id}, config.auth_secret_key, {
        expiresIn: 60
    });
};

module.exports = jwtVerify;