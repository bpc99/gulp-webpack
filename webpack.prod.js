const merge = require('webpack-merge');
const common = require('./webpack.common');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

// 生产打包
let prodConfig = {
    mode: 'production',
    module: {},
    optimization: {
        minimizer: [
            new uglifyjsWebpackPlugin({
                cache: true,//是否启用文件缓存，默认缓存在node_modules/.cache/uglifyjs-webpack-plugin.目录
                parallel: true,//使用多进程并行运行来提高构建速度
                sourceMap: true//使用sourceMap将错误消息位置映射到模块
            })
        ],
    }
};

module.exports = merge(common, prodConfig);
