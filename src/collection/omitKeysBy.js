import invariant from 'invariant';
import isArray from 'lodash/isArray';
import omitBy from 'lodash/omitBy';

export default (collection, predicate) => {
  invariant(isArray(collection), 'collection must be an array');
  invariant(typeof predicate === 'function', 'predicate must be a function');
  return collection.map(item => omitBy(item, predicate));
};
