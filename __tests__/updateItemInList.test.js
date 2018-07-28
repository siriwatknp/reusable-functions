import { assert } from 'chai';
import { updateItemInList } from '../src';

describe('updateItemInList', () => {
  it('should throw error', () => {
    const test = undefined;
    assert.throws(() => updateItemInList(test));
  });

  it('should return one updated item', () => {
    const test = [{
      id: 'test',
      name: 'hello'
    }, {
      id: 'test2',
      name: 'hello2'
    }];
    const predicate = ({ id }) => id === 'test';
    const callback = item => ({
      ...item,
      name: 'changed'
    });
    const expect = [{
      id: 'test',
      name: 'changed'
    }, {
      id: 'test2',
      name: 'hello2'
    }];
    assert.deepEqual(expect, updateItemInList(test, predicate, callback));
  });

  it('should return two updated items', () => {
    const test = [{
      id: 'test',
      name: 'hello',
      shouldChange: true
    }, {
      id: 'test2',
      name: 'hello2'
    }, {
      id: 'test3',
      name: 'hello3',
      shouldChange: true
    }];
    const predicate = ({ shouldChange }) => shouldChange;
    const callback = item => ({
      ...item,
      name: 'changed'
    });
    const expect = [{
      id: 'test',
      name: 'changed',
      shouldChange: true
    }, {
      id: 'test2',
      name: 'hello2'
    }, {
      id: 'test3',
      name: 'changed',
      shouldChange: true
    }];
    assert.deepEqual(expect, updateItemInList(test, predicate, callback));
  });
});
