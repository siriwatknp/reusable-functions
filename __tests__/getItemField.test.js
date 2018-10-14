import { assert } from 'chai';
import { getItemField } from '../src';

describe('getField', () => {
  it('should return undefined', () => {
    const test = undefined;
    const predicate = ({ id }) => id === 'test';
    const key = 'name';
    const expect = undefined;
    assert.deepEqual(expect, getItemField(test, predicate, key));
  });

  it('should return value of the name', () => {
    const test = [{ id: 'test', name: { firstName: 'jun' } }];
    const predicate = ({ id }) => id === 'test';
    const key = 'name.firstName';
    const expect = 'jun';
    assert.deepEqual(expect, getItemField(test, predicate, key));
  });

  it('should return value of the name (predicate is object)', () => {
    const test = [{ id: 'test', name: { firstName: 'jun' } }];
    const predicate = { name: { firstName: 'jun' } };
    const key = 'name.firstName';
    const expect = 'jun';
    assert.deepEqual(expect, getItemField(test, predicate, key));
  });

  it('should return default value', () => {
    const test = [{ id: 'test', name: { firstName: 'jun' } }];
    const predicate = { name: { firstName: 'mine' } };
    const key = 'name.firstName';
    const defaultValue = 'test';
    const expect = 'test';
    assert.deepEqual(expect, getItemField(test, predicate, key, defaultValue));
  });
});
