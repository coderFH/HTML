const gulifywebpackplugin = require('uglifyjs-webpack-plugin');
const webpackmerge = require('webpack-merge'); //合并的库
const baseconfig = require('./base.config');

module.exports = webpackmerge(baseconfig,{
    plugins : [
        new gulifywebpackplugin() //压缩js代码,高版本的已经压缩了
    ]
});