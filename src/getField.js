import find from 'lodash/find';

export default (list = [], predicate, key) => {
  const item = find(list, predicate);
  if (!item) {
    return undefined;
  }
  return item[key];
};
