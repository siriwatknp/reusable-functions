import { assert } from 'chai';
import { arrayToObject } from '../src';

describe('arrayToObject: array input', () => {
  it('should turn object to array', () => {
    const test = ['id1', 'id2'];
    const expect = {
      'collection.id1': 'test1',
      'collection.id2': 'test2'
    };
    assert.deepEqual(expect, arrayToObject(test, (val, index) => ({
      [`collection.${val}`]: `test${index + 1}`
    })));
  });

  it('value is undefined', () => {
    const expect = {};
    assert.deepEqual(expect, arrayToObject(undefined, (val, index) => ({
      [`collection.${val}`]: `test${index + 1}`
    })));
  });
});

describe('arrayToObject: string input', () => {
  it('should throw error', () => {
    const test = 'test';
    assert.throws(() => arrayToObject(test));
  });

  it('should throw error', () => {
    const test = ['id1', 'id2'];
    assert.throws(() => arrayToObject(test, (val) => (val)));
  });
});
