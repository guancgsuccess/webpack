const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') 
//const cleanWebpackPlugin = require('clean-webpack-plugin')
const PurifyCssWebpack = require('purifycss-webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const glob = require('glob')
const copyWebpackPlugin = require("copy-webpack-plugin")

//引入webpack.rules.js
const rulesConfig = require('./webpack.rules.js');
const modTest = require('./module/a.js')
console.log('===='+modTest()+'====')

//引入webpack.config.json
const jsonConfig = require('./webpack.config.json')

module.exports={
	//入口配置
	entry:{
		//test01:'./src/index01.js'
		test01:jsonConfig.entry,
		jquery:'jquery'
	},
	//出口配置
	output:{
		//path必须是绝对路径
		path:path.resolve(__dirname,'dist'),
		//filename前面我们可以使用一个变量[name],
		//这个就表示获取entry里面的key作为文件名加在前面
		//生成出来的是test01.js和test02.js
		filename:'[name].js'
	},
	module:rulesConfig,
//	module:{
//		//配置一个rules(规则),是一个数组,里面可以包含多条规则
//		rules:[
//			{
//				//test表示测试什么文件类型
//				//利用正则表示所有以.css后缀的样式文件
//				test:/\.css$/,
//				//使用'style-loader','css-loader'
//				//use:['style-loader','css-loader']
//				use:ExtractTextPlugin.extract({
//					fallback:'style-loader',//回滚
//					use:['css-loader','postcss-loader'],
//					publicPath:'../' //解决背景图丢失问题
//				})
//			},{
//				test:/\.(png|jpg|gif)$/,
//				use:{
//					loader:'url-loader',
//					options:{// 这里的options选项参数可以定义多大的图片转换为base64
//						limit:150000, // 表示小于150kb的图片转为base64,大于150kb的是路径
//						outputPath:'imgs'
//					}
//				}
//			},
//			{
//              test:/\.less$/,
//              //use:['style-loader','css-loader','less-loader']
//              use:ExtractTextPlugin.extract({
//                  fallback:'style-loader',
//                  use:['css-loader','less-loader']
//              })
//          }
//		]
//	},
	devServer:{
		//设置服务器的访问的根目录
		contentBase:path.resolve(__dirname,'dist'),
		//服务器ip地址
		host:jsonConfig.host,
		//设置端口
		port:jsonConfig.port,
		//自动打开浏览器
		open:true,
		//热加载
		hot:true,
		//hotOnly:true
	}
	,plugins:[
		//在plugins中调用插件(配置提出来的css名称以及提到哪里)
		new ExtractTextPlugin('css/success.css'),
		new PurifyCssWebpack({
		    paths:glob.sync(path.join(__dirname, 'templates/*.html'))
		}),
		//热更新加载
		new webpack.HotModuleReplacementPlugin(),
		//new cleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			chunks:['test01'],
			filename:'test01.html', //每次调用指定生成的html名称
			hash:'true',//向html引入的src链接后面增加一段hash值,消除缓存
			title:'I love Success',
			template:'./templates/index.html',
		}),
		new copyWebpackPlugin([{
			from:path.resolve(__dirname, 'src/assets'),
			//在dist目录下生成public目录
			to:'./public'
		}]),
		new webpack.ProvidePlugin({
		    $:'jquery',
		    lodash:'lodash'
		})
	],
	  optimization:{
        splitChunks:{
            cacheGroups:{
                aaa:{
                    chunks:'initial',
                    name:'jquery',
                    enforce:true
                },
                bbb:{
                    chunks:'initial',
                    name:'jquery',
                    enforce:true
                }
            }
        }
    }
}
