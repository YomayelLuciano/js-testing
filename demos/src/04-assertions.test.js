// matchers
test('test obj', () => {
  const data = { name: 'nico' };
  data.lastname = 'molina';
  expect(data).toEqual({ name: 'nico', lastname: 'molina' });
});
test('test obj', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('test obj', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Hola stop Mundo').toMatch(/stop/);
});

test('listas o arrays', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});
