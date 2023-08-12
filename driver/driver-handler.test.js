'use strict';


const driverHandler = require('../driver/handler');
const payload = {
  data: {
    store: 'Quick Stop',
    orderId: '3', //does this matter?
    customer: 'Bob',
    address: 'Newark, NJ',
  }
};

describe('Are the events calling the functions?', () => {
  test('Should call driver function', () => {
    const spy = jest.spyOn(console, 'log');
    driverHandler(payload);
    expect(spy).toHaveBeenCalled();
  });
});