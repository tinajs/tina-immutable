import createAdaptor from './adaptor'

const Plugin = {
  install (Tina) {
    const ImmutableDataAdaptor = createAdaptor(Tina)
    Tina.Unit.DataAdaptor = ImmutableDataAdaptor
  },
}

export default Plugin
