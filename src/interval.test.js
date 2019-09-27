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
    let interval1 = new Interval(0,10);

    test('Test interval includes true', () => {
        let interval2 = new Interval(4,8);
        expect(interval1.includes(interval2)).toBe(true)
    });

    test('Test interval includes false', () => {
        let interval2 = new Interval(5,16);
        expect(interval1.includes(interval2)).toBe(false)
    });

});

describe('Union', function () {
    let interval1 = new Interval(4,8);
    let resultat, interval2;

    test('Test interval union true', () => {
        interval2 = new Interval(5,6);
        resultat = new Interval(4,8);
        expect(interval1.union(interval2)).toStrictEqual(resultat)
    });

    test('Test interval union true separate', () => {
        interval2 = new Interval(1,4);
        resultat = new Interval(1,8);
        expect(interval1.union(interval2)).toStrictEqual(resultat)
    });

    test('Test interval union true separate', () => {
        interval2 = new Interval(1,3);
        resultat = [interval2,interval1];
        expect(interval1.union(interval2)).toStrictEqual(resultat)
    });

    test('Test interval union true separate', () => {
        interval2 = new Interval(10,40);
        resultat = [interval1,interval2];
        expect(interval1.union(interval2)).toStrictEqual(resultat)
    });

});