const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development'
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],

    entry: {
        index: './src/js/index.js',
        icons: './src/js/icons.js',
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,

    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],

            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                type: 'asset/resource',
            }, {
                test: /\.svg$/,
                type: 'asset/inline',
            }

        ]
    },

    resolve: {
        alias: {
            'node_modules': path.join(__dirname, 'node_modules'),
        }
    },

};