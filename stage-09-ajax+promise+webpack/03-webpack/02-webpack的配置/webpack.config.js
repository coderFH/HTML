/*
* 引入node的path模块,需要引入 执行 npm init 来生成一个package.json的文件
* path是node的内部模块,其实我们不需要package.json也可以,但是涉及到包的管理,最好有一个package.json
* */
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const gulifywebpackplugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry : './src/main.js',

    output : {
        path : path.resolve(__dirname,'./dist'),
        filename : 'bundle.js',
        // publicPath : 'dist/'  //因为最下边配置了new HtmlWebPackPlugin() 也就是dist下有了html  所以就不要配置路径了  注释了
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                //css-loader : 只负责加载css文件
                //style-loader : 负责将样式添加到Dom中
                //使用多个loader时,是从右向左
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //当加载的图片,小于limit时,会将图片编译成base64字符串形式
                            //当使用的图片大于这个值时,会报 Error: Cannot find module 'file-loader' 的错误
                            //所以需要安装file-loader , 然后图片需要打包到dist文件夹下 ,所以需要配置 publicPath : 'dist/'
                            //使加载的时候,前往dist文件夹下查找
                            //正常情况下,index.html文件也是要打包到dist文件夹下的,所以这一步先这么配置
                            limit: 1000,
                            //配置打包后图片的名字
                            name : 'img/[name].[hash:8].[ext]'
                        },
                    },
                ],
            },
            // 配置babel有问题,先注释
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // }
        ],
    },

    //vue相关配置
    //配置他的作用就是指定vue的构建版本,后续会讲解runtime-only和runtime-compiler的区别
    //不配置 浏览器可能报错,也可能什么内容都没有
    resolve : {
        alias : {
            'vue$' : 'vue/dist/vue.esm.js'
        }
    },

    //添加版权的信息
    plugins : [
        new webpack.BannerPlugin('最终版权归wfh所以'),
        new HtmlWebPackPlugin({
            template : 'index.html' //让dist文件夹下生产的html文件,以index.html文件为模板生成一个
        }),
        new gulifywebpackplugin() //压缩js代码,高版本的已经压缩了
    ],
    //配置每次自动运行的服务 ,也有问题,先注释   先用 npm run bulid运行吧
    // devServer:{
    //     contentBase: './dist', //为哪个文件夹提供本地服务
    //     inline : true //页面实时刷新
    // }
};