'use strict';

const events = require('../eventPool');

const pickup = (payload) => {
  console.log({event: 'pickup'}, 'Vendor: I have an order to be picked up', payload);

  events.emit('pickedup', payload);
  events.emit('inTransit', payload);
  events.emit('delivered', payload);
};

events.on('pickup', pickup);

module.exports = { pickup };
