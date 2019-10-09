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

describe('Book repository getCountBookAddedByMonth', () => {
    test('Test getCountBookAddedByMonth \n Should return 3 books for 2000-02-04 and 2 books for 2000-02-05 \n', () => {

        const books = [];
        for (let i=1 ; i<4 ; i++) {
            books.push({id: i, name: 'Harry Potter', price: 6.66, added_at: '2000-02-04'});
        }
        for (let i=4 ; i<6 ; i++) {
            books.push({id: i, name: 'Harry Potter', price: 6.66, added_at: '2000-02-05'});
        }

        const dbMock = {
            get: jest.fn().mockReturnThis(),
            filter: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue(books)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getCountBookAddedByMonth('Harry Potter')).toEqual(
            [
                { year: 2000, month: 2, count: 5, count_cumulative: 5 }
            ]);
    });

    test('Test getCountBookAddedByMonth \n Should return 3 books for 2000-02-04 and 2 books for 2000-02-05 and 1 book for 2000-03-06\n', () => {

        const books = [];
        for (let i=1 ; i<4 ; i++) {
            books.push({id: i, name: 'Harry Potter', price: 6.66, added_at: '2000-02-04'});
        }
        for (let i=4 ; i<6 ; i++) {
            books.push({id: i, name: 'Harry Potter', price: 6.66, added_at: '2000-02-05'});
        }
        for (let i=6 ; i<7 ; i++) {
            books.push({id: i, name: 'Harry Potter', price: 6.66, added_at: '2000-03-06'});
        }


        const dbMock = {
            get: jest.fn().mockReturnThis(),
            filter: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue(books)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getCountBookAddedByMonth('Harry Potter')).toEqual(
            [
                { year: 2000, month: 2, count: 5, count_cumulative: 5 },
                { year: 2000, month: 3, count: 1, count_cumulative: 6 }
            ]);
    });

    test('Test getCountBookAddedByMonth \n Should return an error \n', () => {
        const dbMock = {
            get: jest.fn().mockReturnThis(),
            filter: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue([])
        };
        const repository = new BookRepository(dbMock);

        expect(() => {
            repository.getCountBookAddedByMonth('Potter Harry');
        }).toThrow();
    });
});