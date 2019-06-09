'use strict';

const parseXmp = require('./lib/parseXmp');
const promiseToCallback = require('./lib/promiseToCallback');

module.exports = (buffer, callback) => promiseToCallback(parseXmp(buffer), callback);
module.exports.fromBuffer = (buffer, callback) => promiseToCallback(parseXmp(buffer), callback);