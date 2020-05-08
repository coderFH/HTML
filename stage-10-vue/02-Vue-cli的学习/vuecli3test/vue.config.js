const path = require('path');
const webpack = require('webpack');
module.exports = {
  // output: {
  //   path: path.resolve(__dirname, 'bundle')
  // }
  /*
  Vue-CLI为了方便起见对webpack原有的属性进行了一层封装, 如果我们需要修改webpack的配置
  那么我们可以在项目中新建一个vue.config.js的文件, 然后去查询Vue-CLI的封装是否能够满足我们的需求
  如果可以满足我们的需求, 那么就使用Vue-CLI封装的属性来修改webpack的配置
  如果不可以满足我们的需求, 那么我们可以通过configureWebpack的属性来编写原生的webpack配置
  * */
  outputDir: 'bundle',
  configureWebpack: {
    // 就可以在这个对象中编写原生的webpack配置
    plugins: [
      new webpack.BannerPlugin({
        banner: 'wangfh-www.wangfh.com'
      })
    ]
  }
}
