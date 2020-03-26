/*
 * @Author: PT
 * @Date: 2020-03-24 17:54:14
 * @LastEditors: PT
 * @LastEditTime: 2020-03-26 10:32:49
 * @Description: loader配置
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 将js中的css抽离出来 减少js包

module.exports = function (devMode) {
  const loaders = [
    {
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        }
      },
      exclude: /node_modules/ // 排除 node_modules 目录
    },
    {
      test: /\.(le|c)ss$/,
      use: [
        // 'style-loader', // 项目比较小 建议使用style-loader 将css插入到html的style中
        // 'vue-style-loader' // vue项目 开发模式使用此loader(如果要使用热更新 必须使用vue-style-loader)
        devMode ? 'vue-style-loader' :
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: devMode,
            esModule: true // ,
            // publicPath: '/'
          }
        },
        'css-loader',
        'postcss-loader',
        'less-loader'
      ],
      // exclude: /node_modules/
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10240,
            fallback: {
              loader: 'file-loader',
              options: {
                name: devMode ? 'fonts/[name].[ext]' : 'fonts/[name].[hash:6].[ext]'
              }
            }
          }
        }
      ]
    },
    {
      test: /\.(png|jpg|gif|jpeg|webp|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10240, // 10K
            esModule: false,
            fallback: {
              loader: 'file-loader',
              options: {
                // publicPath: '/public/path/to/',
                name: devMode ? 'img/[name].[ext]' : 'img/[name]_[hash:6].[ext]'
              }
            }
          }
        }
      ],
      // exclude: /node_modules/
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      loader: 'file-loader',
      options: {
        esModule: false,
        name: devMode ? 'media/[name].[ext]' : 'media/[name].[hash:6].[ext]'
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    // {
    //   test: /\.(html)$/,
    //   use: {
    //     loader: 'html-loader',
    //     options: {
    //       attributes: {
    //         list: [
    //           {
    //             tag: 'img',
    //             attribute: 'src',
    //             type: 'src'
    //           },
    //           {
    //             tag: 'video',
    //             attribute: 'src',
    //             type: 'src'
    //           }
    //         ]
    //       }
    //     }
    //   }
    // }
  ]
  return loaders
}
