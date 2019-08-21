const common = require('./webpack.common');
const merge = require('webpack-merge');

//开发打包
let devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',//开发阶段开启 source map
    module: {}
};

module.exports = merge(common, devConfig);
