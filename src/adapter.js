import { isImmutable, fromJS, is } from 'immutable'

export default function create (BasicDataAdapter) {
  class ImmutableDataAdapter extends BasicDataAdapter {
    static isData (data) {
      return isImmutable(data)
    }

    static fromPlainObject (plain) {
      return fromJS(plain)
    }

    static merge (original, extra) {
      return original.merge(extra)
    }

    static diff (original, extra) {
      return original.filter((value, key) => !is(value, extra.get(key)))
    }

    static toPlainObject (data) {
      return data.toJS()
    }
  }

  return ImmutableDataAdapter
}
