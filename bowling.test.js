let a = require('./bowling');
test('this should return the score  : ',function () {
  expect(a([0,0,0,0,0,0,0,0,0,0])).toBe(0);
});
