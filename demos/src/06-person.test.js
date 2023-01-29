const Person = require('./06-person');

// Con describe englobo todas las pruebas en un mismo grupo.
describe('Test for Person', () => {
  let person;
  // Con before each ya le doy valor a person para todas las pruebas.
  // Sino tendria que estar declarando la variable person por cada prueba.
  beforeEach(() => {
    person = new Person('NICOLAS', 45, 1.7);
  });
  test('should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return up', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });

  test('should return down', () => {
    person.weight = 77;
    person.height = 1.65;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 1');
  });
});
