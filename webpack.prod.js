const path = require('path');
const last_commit = require('child_process').execSync('git rev-parse HEAD').toString('utf8');
const webpack = require('webpack');

const date = new Date()
const date_formated = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()

module.exports = {
    entry:  {
        index :'./src/js/index.js',
        comp :'./src/js/comp.js'
    },
    output: {
        filename: date_formated + '/[name].prod.js',
        path: path.resolve(__dirname, 'share'),
        library: 'aep',
        libraryTarget: 'umd',
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    },
    mode:'production',
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                    'style-loader',
                  // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                  // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    },
    plugins : [new webpack.BannerPlugin({
        banner: last_commit
    })]
};