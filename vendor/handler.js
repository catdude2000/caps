'use strict';

const events = require('../eventPool');

events.on('pickedUp', pickedUp);
events.on('inTransit', inTransit);
events.on('delivered', delivered);

// let order = {
// time: new Date().getTime,
let payload = {
  store: 'Quick Stop',
  orderId:Math.floor(Math.random() * 100),
  customer: 'Bob',
  address: 'Newark, NJ',
};
// };

const vendorOrder = () => {
  events.emit('pickup', payload);
  console.log('order for pickup', payload);
};

function pickedUp(orderId) {
  console.log(`Vendor: I see order ${orderId} was picked up`);
}
function inTransit(orderId) {
  console.log({event: 'inTransit'}, orderId);
}
function delivered(orderId) {
  console.log({event: 'delivered'}, 'Vendor: Thank you for delivering ', orderId);
}

setInterval(() => {
  
  events.emit('pickup', payload);
}, 3000);

module.exports = { vendorOrder, pickedUp, inTransit, delivered };
