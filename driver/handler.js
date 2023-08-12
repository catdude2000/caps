'use strict';

const events = require('../eventPool');
const {vendorOrder} = require('../vendor/handler');

events.on('order for pickup', vendorOrder);

const pickup = (payload) => {
  console.log({event: 'order for pickup'}, 'Vendor: I have an order to be picked up', payload);

  events.emit('pickedup', payload);
  events.emit('inTransit', payload);
  events.emit('delivered', payload);
};

module.exports = { pickup };
