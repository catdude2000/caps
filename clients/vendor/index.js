'use strict';

const { io } = require('socket.io-client');
const events = require('../utility');

const client = io('ws://localhost:3000/caps');

const payload = {
  customerId: 'Mikhail Paschev',
  orderId: 14,
  address: '47 Bagend',
};
client.emit(events.pickUp, payload);

client.on(events.announcement, (payload) => console.log(payload.message));
client.on(events.pickedUp, (payload) => console.log('The package has been picked up by the driver', payload.orderId));
client.on(events.pickedUp, (payload) => console.log('The package is in transit', payload.orderId));
client.on(events.delivered, (payload) => console.log(payload.message, payload.orderId));

// const { vendorOrder } = require('./handler');
// vendorOrder(events);

module.exports = { client };