import { assert } from 'chai';
import { objectToArray } from '../src';

describe('ObjectToArray: object input', () => {
  it('should turn object to array', () => {
    const test = {
      a: 'valueA',
      b: 'valueB'
    };
    const mapKey = {
      a: 'test',
      b: 'hello'
    };
    const expect = [
      { brand: 'test' },
      { brand: 'hello' }
    ];
    assert.deepEqual(expect, objectToArray(test, (val, key) => ({ brand: mapKey[key] })));
  });

  it('value is undefined', () => {
    const expect = [];
    assert.deepEqual(expect, objectToArray(undefined, (val, key) => ({ brand: mapKey[key] })));
  });
});
