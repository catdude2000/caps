const events = require('../eventPool');
const { vendorOrder } = require('./handler');

vendorOrder(events);

module.exports = { events };