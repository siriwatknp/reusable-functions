import { assert } from 'chai';
import { omitKeys } from '../../src';

describe('addItemToList: array input', () => {
  it('should remove fields: a, b from collection', () => {
    const test = [{ a: 'a', b: 'b', c: 'c' }, { a: 'a', b: 'b', c: 'c' }];
    const expect = [{ c: 'c' }, { c: 'c' }];
    assert.deepEqual(expect, omitKeys(test, ['a', 'b']));
  });
});
