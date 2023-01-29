const { sum, divide, multiply } = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
  const rta = sum(1, 2);
  expect(rta).toBe(3);
});
test('adds 1 + 2 to equal 3', () => {
  const rta = multiply(5, 2);
  expect(rta).toBe(10);
  const rta2 = multiply(5.5, 2);
  expect(rta2).toBe(11);
});
test('adds 1 + 2 to equal 3', () => {
  const rta = divide(10, 2);
  expect(rta).toBe(5);
});
