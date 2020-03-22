const path = require('path');

module.exports = {
    entry:  {
        index :'./src/js/index.js',
        comp :'./src/js/comp.js'
    },
    output: {
        filename: 'js/[name].prod.js',
        path: path.resolve(__dirname, 'dist'),
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
    }
};