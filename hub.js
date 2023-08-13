'use strict';

const { Server } = require('socket.io');
const events = require('./utility');

const io = new Server();

io.listen(3000);

//namespace
const caps = io.of('/caps');

const pickupReady = (payload, socket) => {
  console.log('the pickup was requested', payload.orderId);
  // socket.emit('received', { message: 'pickup acknowledged' });
  caps.emit(events.ready, { message: 'a pickup is now ready', ...payload}); // ?...?
};

const hasBeenPickedUp = (payload, socket) => {
  console.log('The driver has picked up the package', payload.orderId);
  // socket.emit('received', { message: 'picked up acknowledged'});
  caps.emit(events.pickedUp, payload);
};

const isInTransit = (payload) => {
  console.log('The package is in transit', payload.orderId);
  caps.emit(events.inTransit, payload);
};

const wasDelivered = (payload, socket) => {
  console.log(`The package for ${payload.customerId} has been delivered`);
  // socket.emit('received', { message: 'delivery acknowledged' });
  caps.emit(events.delivered, {
    orderId: payload.orderId, 
    message: `The package for ${payload.customerId} has been delivered`,
  });
};

const handleConnection = (socket) => {
  console.log('We have a new connection: ', socket.id);

  socket.on(events.pickup, (payload) => pickupReady(payload));
  socket.on(events.pickedUp, hasBeenPickedUp);
  socket.on(events.inTransit, isInTransit);
  socket.on(events.delivered, wasDelivered);
};

function startSocketServer() {
  console.log('The server has been started');
  caps.on('connection', handleConnection);
}


// require('./driver/handler');
// require('./vendor/handler');

//listens to events

//logger                             Move to own file?
// const logger = (payload, event) => {
//   const log = {
//     events,
//     time: new Date(),
//     payload
//   };
//   console.log('event', log);
// };

// events.on('pickup', logger);
// events.on('delivered', logger);
// events.on('inTransit', logger);

module.exports = {
  startSocketServer,
  isInTransit,
  wasDelivered,
  io,
  caps,
};
