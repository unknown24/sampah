const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry:  {
        index :'./src/js/index.js',
        comp :'./src/js/comp.js'
    },
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: 'js/[name].build.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'aep',
        libraryTarget: 'umd',
    },
    mode:'development',
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template:'index.html'
        }),
    ]
};