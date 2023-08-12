'use strict';

const { pickup } = require('../driver/handler');
const payload = {
  store: 'Quick Stop',
  orderId: '3', 
  customer: 'Bob',
  address: 'Newark, NJ',
};

describe('Are the events calling the functions?', () => {
  test('Should call driver function', () => {
    const spy = jest.spyOn(console, 'log');
    pickup(payload);
    expect(spy).toHaveBeenCalled();
  });
});
