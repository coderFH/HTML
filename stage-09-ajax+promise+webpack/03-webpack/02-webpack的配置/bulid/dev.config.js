const baseconfig = require('./base.config');
const webpackmerge = require('webpack-merge'); //合并的库

module.exports = webpackmerge(baseconfig,{
    //配置每次自动运行的服务
    devServer:{
        contentBase: './dist', //为哪个文件夹提供本地服务
        inline : true //页面实时刷新
    }
});