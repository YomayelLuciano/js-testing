const BooksService = require('./books.service');
const { generateManyBooks } = require('../fakes/book.fake');

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
}))); // Cuando llames a esta libreria llamamos a esta suplantacion

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });
  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      //Arrange
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      //Act
      const books = await service.getBooks({});
      console.log(books);
      //Assert
      expect(books.length).toEqual(20);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
    test('should return a list book', async () => {
      //Arrange
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      //Act
      const books = await service.getBooks({});
      console.log(books);
      //Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
