import { assert } from 'chai';
import { substringBetween } from '../src';

describe('substringBetween', () => {
  it('should throw error', () => {
    const test = undefined;
    assert.throws(() => substringBetween(test));
  });

  it('should throw error', () => {
    const test = () => {};
    assert.throws(() => substringBetween(test));
  });

  it('should return empty string', () => {
    const test = '';
    const startPattern = '';
    const endPattern = '';
    const expect = '';
    assert.deepEqual(expect, substringBetween(test, startPattern, endPattern));
  });

  it('should return string between', () => {
    const test = 'Hello (copy 2)';
    const startPattern = '(';
    const endPattern = ')';
    const expect = 'copy 2';
    assert.deepEqual(expect, substringBetween(test, startPattern, endPattern));
  });
});
