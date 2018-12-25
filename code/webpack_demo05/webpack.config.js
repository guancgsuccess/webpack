const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');   
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
	plugins:[
		new HtmlWebpackPlugin()
	]
}
