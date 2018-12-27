# webpack中使用json

`webpack3.x之前需要使用json-loader.但是在webpack3.x以后的版本中能够自动识别json.`

~~~~
const json = require('./xxx.json')
~~~~



1. **新建webpack.config.json并且编辑**

   ~~~js
   {
       "entry":"./src/index01.js",
       "port":"8088",
       "host":"localhost"
   }
   ~~~


2. **在webpack.config.js文件中引入**

   ~~~js
   const jsonConfig = require('./webpack.config.json')
   ~~~



3. **使用** 

   **在出现"entry","port","host"的地方利用jsonConfig.key名称来代替**

   ~~~js
   module.exports={
   	//入口配置
   	entry:{
   		//test01:'./src/index01.js'
   		test01:jsonConfig.entry
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
   		})
   	]
   }
   ~~~




