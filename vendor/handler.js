'use strict';

const events = require('../eventPool');

events.on('pickedUp', pickedUp);
events.on('inTransit', inTransit);
events.on('delivered', delivered);

let order = {
  time: new Date().getTime,
  payload: {
    store: 'Quick Stop',
    orderId:Math.floor(Math.random() * 100),
    customer: 'Bob',
    address: 'Newark, NJ',
  }
};

const vendorOrder = () => {
  events.emit('order for pickup', order);
};

function pickedUp(orderId) {
  console.log(`Vendor: I see order ${orderId} was picked up`);
}
function inTransit(orderId) {
  console.log({event: 'in-transit'}, orderId);
}
function delivered(orderId) {
  console.log({event: 'delivered'}, `Vendor: Thank you for delivering ${orderId}`);
}

// setInterval(() => {
  
//   events.emit('pickup', Event);
// }, 3000);

module.exports = { vendorOrder, setInterval, pickedUp, inTransit, delivered };
