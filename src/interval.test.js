const Interval = require('./interval.js');

describe('Overlaps', function () {

    test('Test interval true', () => {
        let interval1 = new Interval(0,24);
        let interval2 = new Interval(6,34);
        expect(interval1.overlaps(interval2)).toBe(true);
    });

    test('Test interval false', () => {
        let interval1 = new Interval(0,24);
        let interval2 = new Interval(25,46);
        expect(interval1.overlaps(interval2)).toBe(false);
    });

});

describe('Includes', function () {

    let interval1 = new Interval(2,6);
    let interval2;

    test('Test interval includes true', () => {
        interval2 = new Interval(3,5);
        expect(interval1.includes(interval2)).toBe(true)
    });

    test('Test interval includes false', () => {
        interval2 = new Interval(5,16);
        expect(interval1.includes(interval2)).toBe(false)
    });

});