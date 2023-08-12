'use strict';

const events = require('../eventPool');

events.on('pickedUp', pickedUp);
events.on('inTransit', inTransit);
events.on('delivered', delivered);

function pickedUp(orderId) {
  console.log(`Vendor: I see order ${orderId} was picked up`);
}
function inTransit(orderId) {
  console.log({event: 'in-transit'}, orderId);
}
function delivered(orderId) {
  console.log({event: 'delivered'}, `Vendor: Thank you for delivering ${orderId}`);
}

setInterval(() => {
  let Event = {
    time: new Date().getTime,
    payload: {
      store: 'Quick Stop',
      orderId:Math.floor(Math.random() * 100),
      customer: 'Bob',
      address: 'Newark, NJ',
    }
  };
  events.emit('pickup', Event);
}, 3000);

module.exports = { pickedUp, inTransit, delivered };
