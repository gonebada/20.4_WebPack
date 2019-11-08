const path = require('path');

//webpack.config.js
module.exports = {
        mode: 'development',
        entry: './src/app.js',
    },
 module: {
rules: [
    {
        test: /\.js$/,
        loader: "babel-loader"
    },
    {
        test: /\.css$/,
        use: [
            { loader: 'style-loader'},
            {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }
        ]
    }
    },
};
