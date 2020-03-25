module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        '> 0.05%',
        'ie>=8',
        'last 4 version'
      ]
    })
  ]
}
