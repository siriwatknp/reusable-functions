import find from 'lodash/find';
import get from 'lodash/get';
import isPlainObject from 'lodash/isPlainObject';
import matches from 'lodash/matches';

export default (list = [], predicate, key, defaultValue) => {
  const item = find(list, isPlainObject(predicate) ? matches(predicate) : predicate);
  return get(item, key, defaultValue);
};
