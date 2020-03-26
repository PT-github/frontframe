/*
 * @Author: PT
 * @Date: 2020-03-24 17:50:38
 * @LastEditors: PT
 * @LastEditTime: 2020-03-26 17:05:10
 * @Description: webpack打包配置
 */
const devMode = process.env.NODE_ENV !== 'production' // 是否为开发模式
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin') // 打包分析
const smp = new SpeedMeasurePlugin()

const config = {
  mode: devMode ? 'development' : 'production',
  entry: {
    app: './src/index.js',
    // other: './src/other.js'
  }, // 入口
  output: require('./build/output')(devMode),
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: require('./build/loaders')(devMode)
  },
  devtool: devMode ? 'cheap-module-eval-source-map' : '', // 开发模式下使用
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: '3000', // 默认是8080
    quiet: false, // 默认不启用
    inline: true, // 默认开启 inline 模式，如果设置为false,开启 iframe 模式
    stats: 'errors-only', // 终端仅打印 error
    overlay: false, // 默认不启用
    clientLogLevel: 'silent', // 日志等级
    compress: true // 是否启用 gzip 压缩
  },
  resolve: require('./build/resolve'), // 解析
  externals: require('./build/externals')(devMode), // 外部引入的包
  optimization: require('./build/optimization')(devMode),
  plugins: require('./build/plugins')(devMode)
}
module.exports = config // devMode ? config : smp.wrap(config)
