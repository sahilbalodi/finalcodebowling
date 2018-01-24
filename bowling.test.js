let a = require('./bowling');
test('this should return the score 0 ',function () {
  expect(a([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).toBe(0);
});
test('this should return the score 300 ',function () {
  expect(a([10,10,10,10,10,10,10,10,10,10,10,10])).toBe(300);
});
test('this should return the score 273 ',function () {
  expect(a([1,2,10,10,10,10,10,10,10,10,10,10,10])).toBe(273);
});
test('this checks if the function returns a number ',function () {
  expect((typeof(a([10,10,10,10,10,10,10,10,10,9,1,2])) === typeof(1))).toBe(true);
});
test('returns null because of negative numbers ',function () {
  expect(a([-1,2,10,10,10,10,10,10,10,10,10,10,10])).toBe(null);
});
test('returns null because of null value ',function () {
  expect(a([null,2,10,10,10,10,10,10,10,10,10,10,10])).toBe(null);
});
test('returns wronginput because of invalid no of parameters ',function () {
  expect((a([1,2,3,4]))).toBe(null);
});
test('this should return the score 270 ',function () {
  expect(a([10,10,10,10,10,10,10,10,10,10,0,0])).toBe(270);
});
test('this should return the score 240 ',function () {
  expect(a([0,0,10,10,10,10,10,10,10,10,10,0,0])).toBe(240);
});
test('this should return the score null for invalid inputs',function () {
  expect(a([0,0,10,10,10,10,10,10,10,10,10,0,0,10,10])).toBe(null);
});
test('this should return the score null for invalid inputs ',function () {
  expect(a([0,0,10,10,10,10,10,10,10,10,10,0,0,0])).toBe(null);
});
test('this should return the score null for invalid inputs ',function () {
  expect(a([0,0,10,10,10,10,10,10,10,10,10,0,0,0])).toBe(null);
});
