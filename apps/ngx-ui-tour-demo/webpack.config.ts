import TerserPlugin from 'terser-webpack-plugin';
import type {Configuration} from 'webpack';
import {merge} from 'webpack-merge';

interface Options {
    server: boolean;
}

type WebpackConf = (ngConfigs: Configuration) => Configuration;

/**
 * We can't just import TS-file to get its content
 * (it is impossible to distinguish default export from loading of raw file's content).
 * ```
 * import textContentOrDefaultExport from './index.ts'
 * ```
 * That is why we use resourceQuery condition to mimic the functionality of the inline syntax.
 * ```
 * import textContext from './index.ts?raw';
 * import defaultExport from './index.ts';
 * ```
 * @see https://webpack.js.org/guides/asset-modules/#replacing-inline-loader-syntax
 */
const RAW_TS_QUERY = /raw/;

export function makeWebpackConfig({server}: Options): WebpackConf {
    const terserPlugin = new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
            ecma: 2015,
            mangle: true,
            module: true,
            sourceMap: false,
            compress: {
                passes: 3,
                keep_fnames: false,
                keep_classnames: false,
                pure_funcs: ['forwardRef'],
                global_defs: {ngDevMode: false}
            },
            format: {
                comments: false
            }
        }
    });

    return (ngConfigs: Configuration): Configuration => {
        return merge(
            ngConfigs,
            {
                resolve: {
                    fallback: {
                        punycode: false
                    }
                },
                module: {
                    /**
                     * With Webpack 5, the raw-loader is no longer needed.
                     * Asset modules provide a built-in way to provide raw-loader functionality without additional dependencies.
                     * @see https://webpack.js.org/guides/asset-modules/
                     */
                    rules: [
                        {
                            test: /\.(ts|html|css|less|md|svg)$/i,
                            resourceQuery: RAW_TS_QUERY,
                            type: 'asset/source'
                        }
                    ]
                },
                ...(process.env['TUI_CI'] === 'true' && !server
                    ? {
                        mode: 'production',
                        plugins: [terserPlugin],
                        optimization: {
                            minimize: true,
                            minimizer: [terserPlugin]
                        }
                    }
                    : {})
            }
        );
    };
}

// noinspection JSUnusedGlobalSymbols
export default makeWebpackConfig({server: false});