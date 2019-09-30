const Interval = require('./interval.js');

describe('Overlaps', function () {

    test('Test interval true', () => {
        let interval1 = new Interval(0,24);
        let interval2 = new Interval(6,34);
        expect(interval1.overlaps(interval2)).toBe(true);
        //test
    });

    test('Test interval false', () => {
        let interval1 = new Interval(0,24);
        let interval2 = new Interval(25,46);
        expect(interval1.overlaps(interval2)).toBe(false);
    });

});