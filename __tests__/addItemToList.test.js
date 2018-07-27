import { assert } from 'chai';
import { addItemToList } from '../src';

describe('addItemToList: array input', () => {
  it('should add item to list', () => {
    const test = undefined;
    const expect = [1];
    assert.deepEqual(expect, addItemToList(test, 1, 0));
  });

  it('should add item(array) to list', () => {
    const test = [1, 2];
    const expect = [0, 4, 1, 2];
    assert.deepEqual(expect, addItemToList(test, [0, 4], 0));
  });

  it('should add item before the list', () => {
    const test = [1, 2, 3];
    const expect = [4, 1, 2, 3];
    assert.deepEqual(expect, addItemToList(test, 4, 0));
  });

  it('should add item to last index of the list', () => {
    const test = [1, 2, 3];
    const expect = [1, 2, 3, 4];
    assert.deepEqual(expect, addItemToList(test, 4));
  });

  it('should add item to second index of the list', () => {
    const test = [1, 2, 3];
    const expect = [1, 2, 4, 3];
    assert.deepEqual(expect, addItemToList(test, 4, 2));
  });

  it('input is undefined', () => {
    const expect = [4];
    assert.deepEqual(expect, addItemToList(undefined, 4, undefined));
  });
});
