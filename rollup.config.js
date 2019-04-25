import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/main.js',
    output: {
        file: 'dist/main.js',
        format: 'cjs',
        esModule: false
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              targets: 'maintained node versions'
            }
          ]
        ],
        plugins: [
            "add-module-exports"
        ]
      })
    ]
  },
  {
    input: 'src/main.js',
    output: {
      file: 'dist/helloRollup.js',
      format: 'umd',
      name: 'helloRollup',
      esModule: false
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              targets: 'cover 95%'
            }
          ]
        ],
        plugins: [
            "add-module-exports"
        ]
      })
    ]
  },
  {
    input: 'src/main.js',
    output: {
      file: 'dist/helloRollup.min.js',
      format: 'umd',
      name: 'helloRollup',
      esModule: false
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              targets: 'cover 95%'
            }
          ]
        ],
        plugins: [
            "add-module-exports"
        ]
      }),
      terser()
    ]
  }
];