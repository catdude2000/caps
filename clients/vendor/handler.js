'use strict';


const {io} = require('socket.io-client');

const client = io('ws://localhost:3000/caps');
const events = require('../utility');

// events.on('pickedUp', pickedUp);
// events.on('inTransit', inTransit);
// events.on('delivered', delivered);

// let order = {
// time: new Date().getTime,
let payload = {
  store: '1-206-flowers',
  orderId:Math.floor(Math.random() * 100),
  customer: 'Bob',
  address: 'Newark, NJ',
};
// };

client.on(events.pickedUp, (payload) => console.log(`Vendor: I see order ${payload.orderId} was picked up`));
client.on(events.delivered, (payload) => console.log({message:`Vendor: Thank you for delivering order # ${payload.orderId}`}));


const vendorOrder = () => {
  client.emit(events.pickup, payload);
  console.log('order for pickup', payload);
};

// function pickedUp(orderId) {
//   console.log(`Vendor: I see order ${orderId} was picked up`);
// }
// function inTransit(orderId) {
//   console.log({event: 'inTransit'}, orderId);
// }
// function delivered(orderId) {
//   console.log({event: 'delivered'}, 'Vendor: Thank you for delivering ', orderId);
// }

setInterval(() => {
  
  client.emit(events.pickup, payload);
}, 3000);

module.exports = { vendorOrder };
