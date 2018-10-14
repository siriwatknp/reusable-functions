import { assert } from 'chai';
import { contains } from '../../src';

describe('addItemToList: array input', () => {
  it('should return true (array of string)', () => {
    const test = ['banana', 'apple', 'orange'];
    const expect = true;
    assert.deepEqual(expect, contains(test, 'orange'));
  });

  it('should return false (array of string)', () => {
    const test = ['banana', 'apple', 'orange'];
    const expect = false;
    assert.deepEqual(expect, contains(test, 'kiwi'));
  });

  it('should return true (array of string)', () => {
    const test = ['banana', 'apple', 'orange'];
    const expect = true;
    assert.deepEqual(expect, contains(test, ['apple', 'orange']));
  });

  it('should return false (array of string)', () => {
    const test = ['banana', 'apple', 'orange'];
    const expect = false;
    assert.deepEqual(expect, contains(test, ['apple', 'kiwi']));
  });

  it('should return true (array of object)', () => {
    const test = [{ name: 'jun', age: 25 }, { name: 'john', age: 35 }];
    const expect = true;
    assert.deepEqual(expect, contains(test, { name: 'jun' }));
  });

  it('should return false (array of object)', () => {
    const test = [{ name: 'jun', age: 25 }, { name: 'john', age: 35 }];
    const expect = false;
    assert.deepEqual(expect, contains(test, [{ name: 'pratt' }]));
  });

  it('should return true (array of object)', () => {
    const test = [{ name: 'jun', age: 25 }, { name: 'john', age: 35 }];
    const expect = true;
    assert.deepEqual(expect, contains(test, [{ name: 'jun' }, { name: 'john' }]));
  });

  it('should return false (array of object)', () => {
    const test = [{ name: 'jun', age: 25 }, { name: 'john', age: 35 }];
    const expect = false;
    assert.deepEqual(expect, contains(test, [{ name: 'jun' }, { name: 'pratt' }]));
  });
});
