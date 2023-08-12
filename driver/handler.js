'use strict';

const events = require('../eventPool');

events.on('pickup', pickup);

function pickup(payload) {
  console.log({event: 'pickup'}, 'Vendor: I have an order to be picked up', payload);

  events.emit('pickedup', payload);
  events.emit('inTransit', payload);
  events.emit('delivered', payload);
}

module.exports = pickup;