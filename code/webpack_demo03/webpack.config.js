const path = require('path')

module.exports={
	//入口配置
	entry:['./src/index01.js','./src/index02.js'],
	//出口配置
	output:{
		//path必须是绝对路径
		path:path.resolve(__dirname,'dist'),
		filename:'index.js'
	}
}
