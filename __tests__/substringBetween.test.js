import { assert } from 'chai';
import { substringBetween } from '../src';

describe('substringBetween', () => {
  it('should return empty string', () => {
    const test = undefined;
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
