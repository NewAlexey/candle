import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';

const isProd = process.env.NODE_ENV === 'production';

const extensions = ['.js', '.ts', '.tsx'];

const babelConfig = {
  extensions,
  exclude: /node_modules/,
  babelrc: false,
  runtimeHelpers: true,
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-require',
    !isProd ? 'babel-plugin-styled-components' : {},
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        useBuiltIns: true,
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
  ],
};

export default {
  input: 'src/index.tsx',
  output: {
    file: 'build/public/index.js',
    format: 'iife',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        isProd ? 'production' : 'development',
      ),
      preventAssignment: true,
    }),
    resolve({
      extensions,
    }),
    commonjs({
      include: /node_modules/,
    }),
    json(),
    copy({
      targets: [
        {
          src: 'src/index.html',
          dest: 'build/public',
        },
        {
          src: 'src/app-express.js',
          dest: 'build',
        },
        {
          src: 'src/assets',
          dest: 'build/public',
        },
      ],
    }),
    babel(babelConfig),
    scss({
      output: 'build/public/index.css',
    }),
    isProd && terser(),
    !isProd &&
      serve({
        host: 'localhost',
        port: 3001,
        open: true,
        contentBase: ['build/public'],
        historyApiFallback: true,
      }),
    !isProd &&
      livereload({
        watch: 'build',
      }),
  ],
};
