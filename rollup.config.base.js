import commonjs from 'rollup-plugin-commonjs'
import nodejs from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

const cssExportMap = {}

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: ['node_modules/**'],
      plugins: ['external-helpers'],
    }),
    nodejs(),
    commonjs(),
  ],
  globals: {
    'immutable': 'Immutable',
  },
  external: ['immutable']
}
