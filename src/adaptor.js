import Immutable from 'immutable'

export default function create (Tina) {
  class ImmutableDataAdaptor extends Tina.BasicDataAdaptor {
    static isData (data) {
      return Immutable.isImmutable(data)
    }

    static fromPlainObject (plain) {
      return Immutable.fromJS(plain)
    }

    static merge (original, extra) {
      return original.merge(extra)
    }

    static diff (original, extra) {
      return original.filter((value, key) => !Immutable.is(value, extra.get(key)))
    }

    static toPlainObject (data) {
      return data.toJS()
    }
  }
}
