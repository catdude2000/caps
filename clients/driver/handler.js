'use strict';

const events = require('../utility');  //not in demo
const client = require('./index');  //wrong import?

const ready = (payload) => {
  console.log('Vendor: I have an order to be picked up');
  setTimeout(() => {
    client.emit(events.inTransit, payload);
  }, 2000);
  setTimeout(() => {
    console.log('The package has been delivered');
    client.emit(events.delivered, payload);
  }, 5000);
};

module.exports = { ready };
