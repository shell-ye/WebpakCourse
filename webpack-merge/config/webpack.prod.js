// 存放生产模式的配置 production
const base = require('./webpack.base.js')
// 用于合并webpack配置的插件
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// merge 可以接受多个参数, 把参数对象合并成一个对象
// 后面的对象属性, 会覆盖前面的对象属性
module.exports = merge(base, {
    plugins: [        
        // 调用清除打包目录插件
        new CleanWebpackPlugin()
    ],
    mode: 'production' // 声明当前是生产环境
})