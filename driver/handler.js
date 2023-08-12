'use strict';

const events = require('../eventPool');

events.on('pickup', pickup);

function pickup(data) {
  console.log({event: 'pickup'}, 'Vendor: I have an order to be picked up', data);

  events.emit('pickedup', data);
  events.emit('inTransit', data);
  events.emit('delivered', data);
}

module.exports = pickup;