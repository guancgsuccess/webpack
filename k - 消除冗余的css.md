# 消除冗余的css

1. **安装**

   ~~~
   npm i purifycss-webpack purify-css -D
   npm i glob -D
   ~~~

2.  **在success.css文件中添加一些没有使用到的样式**

   ~~~css
   body{
   	background-color: yellow;
   	background: url(imgs/school_all.png) no-repeat;
   }
   
   #root{
       color: yellowgreen;
   
       transform: rotate(45deg);
   }
   
   //无用样式
   .a{
   	color: red;
   }
   //无用样式
   .b{
   	color: gray;
   }
   ~~~

3. **引入插件**

   ~~~js
   const PurifyCssWebpack = require('purifycss-webpack')
   const glob = require('glob')
   ~~~

4. **在plugins里面配置**

   ~~~js
   new ExtractTextPlugin('css/success.css'),
   new PurifyCssWebpack({
       paths:glob.sync(path.join(__dirname, 'templates/*.html'))
   })
   ~~~

   这边一定要注意一下顺序的问题

5. `执行npm run build观察dist/css/success.css`

   ~~~
   body {
     background-color: yellow;
     background: url(../imgs/41080489f328d4323ca05243663d8d5e.png) no-repeat;
   }
   
   #root {
     color: yellowgreen;
     -webkit-transform: rotate(45deg);
     transform: rotate(45deg);
   }
   ~~~

   我们会发现那些无用的样式不存在了.