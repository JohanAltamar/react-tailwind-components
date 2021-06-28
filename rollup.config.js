import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from "rollup-plugin-typescript2";

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const packageJson = require('./package.json');

export default [
  {
    input: './src/index.tsx',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourceMap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        exports: 'named',
        sourceMap: true,
      }
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
        extensions: ['.css'],
      }),
      typescript({ useTsconfigDeclarationDir: true }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve({
        extensions
      }),
      terser(),
    ]
  }
];
