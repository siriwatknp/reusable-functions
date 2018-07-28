import isString from 'lodash/isString';
import invariant from 'invariant';

export default (string, startPattern, endPattern) => {
  invariant(isString(string), 'substringBetween accept only String');
  const startIndex = string.lastIndexOf(startPattern) + startPattern.length;
  const substring = string.substring(startIndex);
  const endIndex = substring.indexOf(endPattern);
  return string.substr(startIndex, endIndex);
};
