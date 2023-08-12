'use strict';

const events = require('../eventPool');
const { pickup } = require('./handler');

pickup(events);

module.exports = { events };
