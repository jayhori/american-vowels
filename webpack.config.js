const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: '/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader', 'babel-loader?presets[]=es2016,presets[]=stage-3,presets[]=react'],
            },
            {
                test:  /\.json$/,
                exclude: /(node_modules)/,
                loader: ['json-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
        new UglifyJSPlugin({
          
        }),
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        })
    ]
}