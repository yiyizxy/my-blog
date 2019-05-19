const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let webpackConfig = {
    entry: {
        index: [
            'react-hot-loader/patch',
            'webpack/hot/dev-server',
            'babel-polyfill',
            './src/entry/index.jsx',
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // __dirname指的是当前文件所在目录的根目录
        filename: '[name].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
	            test: /\.(es6|jsx|js)$/,
	            loader: 'babel-loader?cacheDirectory',//babel-loader缓存机制加参数 cacheDirectory
	            exclude: /node_modules/,
	            query: {
	                presets: ['react', 'stage-0', 'es2015', 'stage-3'],
	                plugins: ["transform-object-rest-spread","transform-decorators-legacy","transform-class-properties","babel-plugin-transform-runtime"]
		        }
			},
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }, 'postcss-loader', 'less-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: '[name]-[hash].[ext]'
                    }
                }],
            }
        ],
    },
    plugins: [
        // 模块热加载
        // new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.CommonsChunkPlugin({
            // manifest文件用来引导所有模块的交互。manifest文件包含了加载和处理模块的逻辑。
            // 当webpack编译器处理和映射应用代码时，它把模块的详细的信息都记录到了manifest文件中。当模块被打包并运输到浏览器上时，
            // runtime就会根据manifest文件来处理和加载模块。利用manifest就知道从哪里去获取模块代码。
            names: ["common","manifest"],
            minChunks: Infinity//当项目中引用次数超过2次的包自动打入commons.js中,可自行根据需要进行调整优化
        }),
        new HtmlWebpackPlugin({
            template: 'src/template/index.html', // 模版文件位置
            filename: 'index.html', // 生成文件位置
            chunks: ['index', 'common', 'manifest'], // 绑定对应打包的JS文件
            minify: { //启用代码代码压缩
                removeComments: true, //移除注释
                collapseWhitimespace: true //移除空格
            }
        })
    ],
    devServer: {
        hot: true, // 告诉 dev-server 我们在使用 HMR
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase:true,
        inline: true,
        historyApiFallback: true,
        stats: 'normal',
        publicPath: '/',
        host: '0.0.0.0', // 希望服务器外部可访问
        port: 8000,
    },
};

module.exports = webpackConfig;
