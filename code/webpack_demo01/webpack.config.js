module.exports={
	//入口配置
	entry:{
		//key是随便取的
		entry_src:'./src/index.js'
	},
	
	//出口配置
	output:{
		//需要是一个绝对地址,nodejs里面提供的全局变量__dirname
		path:__dirname+'/dist',
		filename:'boundle.js'
	}
}