'use strict';

const fileToBuffer = require('./lib/fromFile');
const parseXmp = require('./lib/parseXmp');
const promiseToCallback = require('./lib/promiseToCallback');

module.exports.fromBuffer = (buffer, callback) => promiseToCallback(parseXmp(buffer), callback);
module.exports.fromFile = (filename, callback) => promiseToCallback(fileToBuffer(filename).then(parseXmp), callback);
module.exports.fileToBuffer = fileToBuffer;