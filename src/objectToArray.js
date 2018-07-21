import reduce from 'lodash/reduce'
import isPlainObject from 'lodash/isPlainObject'
import invariant from 'invariant'

export default (object = {}, callback) => {
  invariant(isPlainObject(object), 'input should be plain object')
  return reduce(object, (result, val, key) => ([
    ...result,
    callback(val, key),
  ]), [])
}
