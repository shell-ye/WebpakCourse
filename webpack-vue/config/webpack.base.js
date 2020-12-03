const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: path.resolve(__dirname, './../src/main.js'),
    output: {
        path: path.resolve(__dirname, './../dist'),
        filename: '[name].js'
    },
    plugins: [
        new HTMLWebpackPlugin({template: path.resolve(__dirname, './../public/index.html')}),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/[name].css'
        })
    ],
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.js', '.vue', '.css'],
        alias: {
            "@": path.resolve(__dirname, './../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 超过 8k 就不转 base64, 小于 8k 才转
                            limit: 8 * 1024,
                            // 配置输出的文件名
                            name: '[name].[ext]',
                            // 配置静态资源的引用路径
                            publicPath: "../img/",
                            // 配置输出的文件目录
                            outputPath: "img/",
                            // 关闭ES模块语法
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV !== 'production'
                        ? 'vue-style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}