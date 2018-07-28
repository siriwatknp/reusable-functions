import isArray from 'lodash/isArray';
import invariant from 'invariant';

export default (items, predicate, callback) => {
  invariant(isArray(items), 'updateItemInList accept only array as \'items\'');
  return items.map((item, index) => {
    if (predicate(item, index)) {
      return callback(item);
    }
    return item;
  });
};
