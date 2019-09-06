const path = require('path');

module.exports = {
    mode: 'production',
    // 入口文件配置
    entry: './src/js/main.js',
    // 输出配置
    output: {
        // 出口文件
        filename: 'bundle.js',
        // 设置全路径
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        // 规则数组, 里面的每一个对象都是在描述一个loader
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        query: {
                            name: 'img/[name]-[hash:5].[ext]'
                        }
                    },
                ],
            },
        ]
    },
    devServer:{
        contentBase: './dist'
    }
};