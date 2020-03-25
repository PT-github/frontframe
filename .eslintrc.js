/*
 * @Author: PT
 * @Date: 2020-03-23 10:47:19
 * @LastEditors: PT
 * @LastEditTime: 2020-03-25 09:42:30
 * @Description: 
 */
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  "ignorePatterns": ["dist/", "node_modules/", "vendor/"],
  rules: {
    "parser": "babel-eslint"
  }
}
