import { assert } from 'chai';
import { incrementBy } from '../../src';

describe('addItemToList: array input', () => {
  it('should equal 1', () => {
    const test = [{ price: 30 }, { price: 50 }, { price: 70 }];
    const expect = 1;
    const isPriceOver = limit => val => val.price > limit;
    assert.deepEqual(expect, incrementBy(test, isPriceOver(50)));
  });
});
