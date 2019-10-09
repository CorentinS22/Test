const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Test save a book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('Book repository getTotalCount', function () {

    test('Test getTotalCount', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(3)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalCount()).toBe(3);
    });
});

describe('Book repository getTotalPrice', function () {

    test('Test getTotalPrice', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(10)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalPrice()).toBe(100);
    });
});

describe('Book repository getBookByName', () => {
    test('Test getBookByName', () =>  {
        const HPotter =  [
            {
                id: 1,
                name: 'Harry Potter',
                price: 17.99,
                added_at: '2019-05-05'
            }
        ];

        const dbMock = {
            get: jest.fn().mockReturnThis(),
            find: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue(HPotter)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getBookByName('Harry Potter')).toBe(HPotter);
    });
});