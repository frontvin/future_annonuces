const path = require('path')
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin')
const MomentLocalesPlugin = require(`moment-locales-webpack-plugin`)

module.exports = {
    mode: process.env.production ? 'development' : 'production',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public/js')

    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: 'http://localhost:8080/',
        compress: true,
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    plugins: [
        new UnminifiedWebpackPlugin({
            include: /\.min\.js$/,
            minimize: true
        }),
        new MomentLocalesPlugin({
            localesToKeep: [`es-us`],
        })
    ]
}
