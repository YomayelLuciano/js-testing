// Por cada describe vas agrupando
describe('Set', () => {
  beforeAll(() => {
    // levantar una bbdd por ej
  });

  beforeEach(() => {
    // Se va a correr por cada prueba
  });

  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });

  afterEach(() => {
    // Despues de cada caso de prueba
  });

  afterAll(() => {
    // bajar la bbdd
  });
});
