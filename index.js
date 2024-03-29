'use strict';

const goodbye = require('./lib/bye');
const { greet } = require('./lib/greet');

// exporting both files in an object
module.exports = { greet, goodbye };
