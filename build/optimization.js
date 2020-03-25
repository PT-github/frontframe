/*
 * @Author: PT
 * @Date: 2020-03-24 20:24:47
 * @LastEditors: PT
 * @LastEditTime: 2020-03-25 12:14:45
 * @Description: optimization配置
 */
function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}
module.exports = function (devMode) {
  return devMode ? {} : {
    // minimize: true,
    usedExports: true,
    runtimeChunk: {
      name: 'runtime~async' // 多入口 只导出一个runtime懒加载js
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: { // 分离除node_modules中的模块 权重比default要高
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: { // 其他的模块
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
