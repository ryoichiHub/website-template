import { scripts as config } from './tasks/config';

module.exports = {
    mode: process.env.NODE_ENV ? 'production' : 'development',
    entry: {
        app: `./${config.srcRoot}/main.js`
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' }
        ]
    },
    output: {
        filename: 'main.js',
    },
    devtool: 'source-map'
};
