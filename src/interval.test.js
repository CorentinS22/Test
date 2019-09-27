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
    let intervalGenerale = new Interval(0,10);

    test('Test interval includes true', () => {
        let interval2 = new Interval(4,8);
        expect(intervalGenerale.includes(interval2)).toBe(true)
    });

    test('Test interval includes false', () => {
        let interval2 = new Interval(5,16);
        expect(intervalGenerale.includes(interval2)).toBe(false)
    });

});