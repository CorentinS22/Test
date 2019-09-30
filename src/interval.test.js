const Interval = require('./interval.js');

describe('Overlaps', function () {

    let interval1, interval2;

    test('Test interval true / interval1 contenu dans interval2', () => {
        interval1 = new Interval(3,6);
        interval2 = new Interval(4,5);
        expect(interval1.overlaps(interval2)).toBe(true);
    });

    test('Test interval true / interval1 contenu (debut) dans interval2', () => {
        interval1 = new Interval(3,6);
        interval2 = new Interval(4,8);
        expect(interval1.overlaps(interval2)).toBe(true);
    });

    test('Test interval true / interval1 contenu (fin) dans interval2', () => {
        interval1 = new Interval(6,10);
        interval2 = new Interval(4,8);
        expect(interval1.overlaps(interval2)).toBe(true);
    });

    test('Test interval false', () => {
        interval1 = new Interval(3,6);
        interval2 = new Interval(7,9);
        expect(interval1.overlaps(interval2)).toBe(false);
    });

});