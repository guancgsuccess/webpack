const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') 
//const cleanWebpackPlugin = require('clean-webpack-plugin')
module.exports={
	//入口配置
	entry:{
		test01:'./src/index01.js'
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
	module:{
		//配置一个rules(规则),是一个数组,里面可以包含多条规则
		rules:[
			{
				//test表示测试什么文件类型
				//利用正则表示所有以.css后缀的样式文件
				test:/\.css$/,
				//使用'style-loader','css-loader'
				use:['style-loader','css-loader']
			}
		]
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
		//hotOnly:true
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
		})
	]
}
