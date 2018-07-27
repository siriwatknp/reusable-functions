import { assert } from 'chai';
import { getField } from '../src';

describe('addItemToList: array input', () => {
  it('should return undefined', () => {
    const test = undefined;
    const predicate = ({ id }) => id === 'test';
    const key = 'name';
    const expect = undefined;
    assert.deepEqual(expect, getField(test, predicate, key));
  });

  it('should return value of the name', () => {
    const test = [{ id: 'test', name: 'hello' }];
    const predicate = ({ id }) => id === 'test';
    const key = 'name';
    const expect = 'hello';
    assert.deepEqual(expect, getField(test, predicate, key));
  });
});
