import rollupTypescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: {
    name: 'ts-key-mirror',
    file: 'dist/index.js',
    format: 'umd'
  },
  plugins: [
    rollupTypescript({
      tsconfig: 'tsconfig.base.json'
    })
  ]
}
