import { assert } from 'chai';
import { createBooleanObject } from '../src';

describe('createBooleanObject: object input', () => {
  it('should convert object with key', () => {
    const test = {
      a: 'valueA',
      b: 'valueB'
    };
    const expect = {
      a: true,
      b: true
    };
    assert.deepEqual(expect, createBooleanObject(test));
  });

  it('should convert object with provide key', () => {
    const test = {
      a: 'valueA',
      b: 'valueB'
    };
    const expect = {
      'a.valueA': true,
      'b.valueB': true
    };
    assert.deepEqual(expect, createBooleanObject(test, (val, key) => `${key}.${val}`));
  });
});

describe('createBooleanObject: array input', () => {
  it('should convert object with key', () => {
    const test = ['a', 'b'];
    const expect = {
      a: true,
      b: true
    };
    assert.deepEqual(expect, createBooleanObject(test));
  });

  it('should convert object with provide key', () => {
    const test = ['a', 'b'];
    const expect = {
      'collection.a.0': true,
      'collection.b.1': true
    };
    assert.deepEqual(expect, createBooleanObject(test, (val, index) => `collection.${val}.${index}`));
  });

  it('input is undefined', () => {
    const expect = {};
    assert.deepEqual(expect, createBooleanObject(undefined));
  });
});
