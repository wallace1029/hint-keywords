// rollup.config.js
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm'
    }
  ],
  plugins: [
    typescript(),
    babel({
      exclude: 'mode_modules/',
      extensions: ['.js', '.ts']
    })
  ]
}
