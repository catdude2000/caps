'use strict';

const Events = require('events'); //from node module

const events = new Events(); //initializes an "Event Pool"

module.exports = events;