# 静态资源和插件

工作中会有一些已经存在但在项目中没有引用的图片资源或者其他静态资源（比如设计图、开发文档），这些静态资源有可能是文档，也有可能是一些额外的图片。项目组长会要求你打包时保留这些静态资源，直接打包到制定文件夹。其实打包这些资源只需要用到copy-webpack-plugin

1. **安装插件**

   ~~~
   npm i copy-webpack-plugin -D
   ~~~

2. **引入插件**

   ~~~
   const copyWebpackPlugin = require("copy-webpack-plugin")
   ~~~

3. **配置插件**

   ~~~ js
   plugins:[
   			new CopyWebpackPlugin([{
   				from:path.resolve(__dirname, 'src/assets'),
   				to:'./public'
   			}])
   		]
   ~~~

   https://webpack.js.org/plugins/copy-webpack-plugin/

