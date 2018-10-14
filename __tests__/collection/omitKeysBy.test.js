import { assert } from 'chai';
import { omitKeysBy } from '../../src';

describe('addItemToList: array input', () => {
  it('should remove fields: a from collection', () => {
    const test = [{ a: 'id', b: 'b', c: 'c' }, { a: 'id', b: 'b', c: 'c' }];
    const expect = [{ b: 'b', c: 'c' }, { b: 'b', c: 'c' }];
    assert.deepEqual(expect, omitKeysBy(test, val => val === 'id'));
  });
});
