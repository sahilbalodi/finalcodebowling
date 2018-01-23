let a = require('./bowling');
test('this should return the score 0 : ',function () {
  expect(a([0,0,0,0,0,0,0,0,0,0])).toBe(0);
});
test('this should return the score 300 : ',function () {
  expect(a([10,10,10,10,10,10,10,10,10,10,10,10])).toBe(300);
});
test('this should return the score 273 : ',function () {
  expect(a([1,2,10,10,10,10,10,10,10,10,10,10,10])).toBe(273);
});
