const mockGetAll = jest.fn();
const request = require('supertest');
const createApp = require('../src/app');
const { generateManyBooks } = require('../src/fakes/book.fake');


jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
}))); // Cuando llames a esta libreria llamamos a esta suplantacion

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list book', () => {
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log('body', body);
          expect(body.lenght).toEqual(20);
        });
    });
  });
});
