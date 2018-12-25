const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') 
//const cleanWebpackPlugin = require('clean-webpack-plugin')
module.exports={
	//入口配置
	entry:{
		test01:'./src/index01.js',
		test02:'./src/index02.js'},
	//出口配置
	output:{
		//path必须是绝对路径
		path:path.resolve(__dirname,'dist'),
		//filename前面我们可以使用一个变量[name],
		//这个就表示获取entry里面的key作为文件名加在前面
		//生成出来的是test01.js和test02.js
		filename:'[name].js'
	},
	devServer:{
		//设置服务器的访问的根目录
		contentBase:path.resolve(__dirname,'dist'),
		//服务器ip地址
		host:'localhost',
		//设置端口
		port:8088,
		//自动打开浏览器
		open:true,
		//热加载
		hot:true,
		hotOnly:true
	}
	,plugins:[
		//热更新加载
		new webpack.HotModuleReplacementPlugin(),
		//new cleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			chunks:['test01'],
			filename:'test01.html', //每次调用指定生成的html名称
			hash:'true',//向html引入的src链接后面增加一段hash值,消除缓存
			title:'I love Success',
			template:'./templates/index.html',
			//压缩输出
			minify:{
				collapseWhitespace:true //折叠空白区域 也就是压缩代码
			}
		}),
		new HtmlWebpackPlugin({
			chunks:['test02'],
			filename:'test02.html',
			hash:'true',//向html引入的src链接后面增加一段hash值,消除缓存
			title:'I love Success2',
			template:'./templates/index2.html',
			//压缩输出
			minify:{
				collapseWhitespace:true //折叠空白区域 也就是压缩代码
			}
		})
	]
}
