import isArray from 'lodash/isArray';
import invariant from 'invariant';

export default (collection, predicate) => {
  invariant(isArray(collection), 'incrementBy: collection must be an array');
  let counter = 0;
  collection.forEach((item) => {
    if (predicate && predicate(item)) {
      counter += 1;
    }
  });
  return counter;
};
