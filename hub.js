'use strict';

const events = require('./eventPool');

require('./driver/handler');
require('./vendor/handler');

//listens to events

//logger
const logger = (payload, event) => {
  const log = {
    events,
    time: new Date(),
    payload
  };
  console.log('event', log);
};

events.on('pickup', logger);
events.on('delivered', logger);
events.on('inTransit', logger);
