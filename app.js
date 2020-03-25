/*
 * @Author: PT
 * @Date: 2020-03-23 14:38:36
 * @LastEditors: PT
 * @LastEditTime: 2020-03-24 18:18:04
 * @Description: 静态资源
 */

const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer(function (req, res) {
  // 得到用户的路径

  // eslint-disable-next-line node/no-deprecated-api
  var pathname = url.parse(req.url).pathname
  // 真的读取这个文件
  fs.readFile('./dist/' + pathname, function (err, data) {
    if (err) {
      // 如果此文件不存在，就应该用404返回
      fs.readFile('./static/404.html', function (_err, data) {
        res.writeHead(404, { 'Content-type': 'text/html;charset=UTF8' })
        res.end(data)
      })
      return
    };
    res.end(data)
  })
}).listen(5001, function () {
  console.log('server is running...')
})
