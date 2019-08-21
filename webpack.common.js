module.exports = {
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,//不编译
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    }
};
