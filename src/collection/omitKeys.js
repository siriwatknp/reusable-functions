import invariant from 'invariant';
import isArray from 'lodash/isArray';
import omit from 'lodash/omit';

export default (collection, keys) => {
  invariant(isArray(collection), 'collection must be an array');
  return collection.map(item => omit(item, keys));
};
