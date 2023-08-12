'use strict';

const Events = require('events').EventEmitter; //from node module

const events = new Events(); //initializes an "Event Pool"

module.exports = events;