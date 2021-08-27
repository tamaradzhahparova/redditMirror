const path = require('path');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    mode: NODE_ENV? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.[tj].sx?$/ ,
            use: ['ts-loader'],
        }]
    }
};