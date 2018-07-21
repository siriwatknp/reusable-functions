import invariant from 'invariant'
import isPlainObject from 'lodash/isPlainObject'
import isArray from 'lodash/isArray'

export default (array = [], callback) => {
  invariant(isArray(array), 'input should be array.')
  return array.reduce((result, val, index, raw) => {
    const value = callback(val, index, raw)
    invariant(isPlainObject(value), 'callback result should be object.')
    return {
      ...result,
      ...value
    }
  }, {})
}
