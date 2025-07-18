const path = require('path');
const alias = require('@rollup/plugin-alias');
const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const { default: dts } = require('rollup-plugin-dts');

const projectRootDir = path.resolve(__dirname);

module.exports = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
                exports: 'named',
                sourcemap: true
            },
            {
                file: 'dist/index.esm.js',
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternal(),
            alias({
                entries: [
                    { find: '@components', replacement: path.resolve(projectRootDir, 'src/components') },
                    { find: '@hoc', replacement: path.resolve(projectRootDir, 'src/hoc') },
                    { find: '@utils', replacement: path.resolve(projectRootDir, 'src/utils') },
                    { find: '@types', replacement: path.resolve(projectRootDir, 'src/types') }
                ]
            }),
            resolve({
                browser: true,
                preferBuiltins: false
            }),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.build.json',
                exclude: ['**/*.test.ts', '**/*.test.tsx', '**/__tests__/**']
            })
        ],
        external: ['react', 'react-dom', 'react-native']
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'esm'
        },
        plugins: [
            alias({
                entries: [
                    { find: '@components', replacement: path.resolve(projectRootDir, 'src/components') },
                    { find: '@hoc', replacement: path.resolve(projectRootDir, 'src/hoc') },
                    { find: '@utils', replacement: path.resolve(projectRootDir, 'src/utils') },
                    { find: '@types', replacement: path.resolve(projectRootDir, 'src/types') }
                ]
            }),
            dts()
        ],
        external: ['react', 'react-dom', 'react-native']
    }
];
