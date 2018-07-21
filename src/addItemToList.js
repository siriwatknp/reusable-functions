import invariant from 'invariant';
import isArray from 'lodash/isArray';

export default (list = [], item, index = list.length) => {
  invariant(isArray(list), 'input should be array.');
  const result = isArray(item) ? item : [item];
  return [...list.slice(0, index), ...result, ...list.slice(index)];
};
