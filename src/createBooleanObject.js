/* eslint-disable no-nested-ternary */
import reduce from 'lodash/reduce'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'
import isFunction from 'lodash/isFunction'
import isUndefined from 'lodash/isUndefined'
import invariant from 'invariant'

export default (collection = [], callback) => {
  invariant(isObject(collection), 'Error in createBooleanObject, input is not object or array')
  invariant(isUndefined(callback) || isFunction(callback), 'Error in createBooleanObject, callback should be a function')
  return reduce(collection, (result, val, key) => ({
    ...result,
    [callback ? callback(val, key, collection) : (isArray(collection) ? val : key)]: true,
  }), {})
}
