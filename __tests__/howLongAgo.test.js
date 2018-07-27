import { assert } from 'chai';
import { howLongAgo } from '../src';

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 30;
const year = month * 12;

describe('howLongAgo', () => {
  it('should return in second from now', () => {
    const test = Date.now() - 1000;
    const expect = '1 วินาทีที่แล้ว';
    assert.deepEqual(expect, howLongAgo(test));
  });

  it('should return in second pattern', () => {
    const test = 1532705427792;
    const present = test + (2 * second);
    const expect = '2 วินาทีที่แล้ว';
    assert.deepEqual(expect, howLongAgo(test, present));
  });

  it('should return in minute pattern', () => {
    const test = 1532705427792;
    const present = test + (3 * minute);
    const expect = '3 นาทีที่แล้ว';
    assert.deepEqual(expect, howLongAgo(test, present));
  });

  it('should return in hour pattern', () => {
    const test = 1532705427792;
    const present = test + (4 * hour);
    const expect = '4 ชม.ที่แล้ว';
    assert.deepEqual(expect, howLongAgo(test, present));
  });

  it('should return in day pattern', () => {
    const test = 1532705427792;
    const present = test + (5 * day);
    const expect = '5 วันที่แล้ว';
    assert.deepEqual(expect, howLongAgo(test, present));
  });

  it('should return in month pattern', () => {
    const test = 1532705427792;
    const present = test + (6 * month);
    const expect = '6 เดือนที่แล้ว';
    assert.deepEqual(expect, howLongAgo(test, present));
  });

  it('should return in year pattern', () => {
    const test = 1532705427792;
    const present = test + (7 * year);
    const expect = '7 ปีที่แล้ว';
    assert.deepEqual(expect, howLongAgo(test, present));
  });
});
