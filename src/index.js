import createAdapter from './adapter'

const Plugin = {
  install ({ Page, Component, BasicDataAdapter }) {
    const ImmutableDataAdapter = createAdapter(BasicDataAdapter)
    const options = {
      adapters: {
        data: ImmutableDataAdapter,
      },
    }
    Page.mixin(options)
    Component.mixin(options)
  },
}

export default Plugin
