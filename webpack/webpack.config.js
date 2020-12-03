const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry: 配置入口文件 (从哪个文件开始打包)
    entry: './src/main.js',
    
    // output: 配置输出 (打包到哪去)
    output: {
        // 打包输出的目录 (必须是绝对路径)
        path: path.resolve(__dirname, 'dist'),
        // 打包生成的文件名
        filename: 'bundle.js'
    },

    // 自动生成 HTML 模板插件
    plugins: [
        new HTMLWebpackPlugin({template: path.resolve(__dirname, './public/index.html')}),
        new MiniCssExtractPlugin({
            filename:'css/index.css'
        }),
        // 调用清除打包目录插件
        new CleanWebpackPlugin()
    ],

    // loader
    module: {
        rules: [
            {
                // 正则表达式，用于匹配所有的css文件
                test: /\.css$/,
                // 先用 css-loader 让webpack能够识别 css 文件的内容
                // 再用 style-loader 将样式, 以动态创建style标签的方式添加到页面中去
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './',
                        }
                    },
                    'css-loader'
                ]
                // use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    // 分离出 css 内容
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath:'../',
                        },
                    }, 
                    'css-loader',
                    'less-loader' 
                ]
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
                            publicPath: "../images/",
                            // 配置输出的文件目录
                            outputPath: "images/"
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            // 配置输出的文件名
                            name: '[name].[ext]',
                            // 配置静态资源的引用路径
                            publicPath: "../fonts/",
                            // 配置输出的文件目录
                            outputPath: "fonts/"
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    devServer: {
        port: 8080, // 端口号
        open: true // 自动打开浏览器
    },

    // 打包模式 production 压缩/development 不压缩
    mode: 'development'
}