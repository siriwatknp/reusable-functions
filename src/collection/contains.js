import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import every from 'lodash/every';
import find from 'lodash/find';

export default (collection, value) => {
  if (isString(value)) {
    return collection.includes(value);
  }
  if (isArray(value)) {
    return every(value, (item) => {
      if (isString(item)) {
        return collection.includes(item);
      }
      return !!find(collection, item);
    });
  }
  return !!find(collection, value);
};
