# 处理less文件

1. **安装**

   ~~~
   npm i less less-loader -D
   ~~~

2.  **在src/less目录中新建a.less文件**

   ~~~
   @a:red;
   
   #less-id{
       color: @a;
       font-size: 30px;
   }
   ~~~

3. **在src/index.js文件中必须要入a.less文件**

   ~~~
   import '../src/less/a.less'
   ~~~

4. **webpack.config.js文件添加规则**

   ~~~
   {
       test:/\.less$/,
       //use:['style-loader','css-loader','less-loader']
       use:ExtractTextPlugin.extract({
       fallback:'style-loader',
       use:['css-loader','less-loader']
       })
   }
   ~~~

5. **打包运行**

   ~~~
   npm run build
   npm run dev
   ~~~

# 分离less文件

~~~
{
    test:/\.less$/,
    //use:['style-loader','css-loader','less-loader']
    use:ExtractTextPlugin.extract({
    fallback:'style-loader',
    use:['css-loader','less-loader']
    })
}
~~~



# 处理sass文件

1. `安装`

   ~~~
   npm i node-sass sass-loader -D
   ~~~

2.  `配置`

   ~~~
   {
   	test:/\.(sass|scss)$/,
   	use:['style-loader','css-loader','sass-loader']
   }
   ~~~

3. `提取sass`

   ~~~
   {
       test:/\.(sass|scss)$/,
       use:ExtractTextPlugin.extract({
       fallback:'style-loader',
       use:['css-loader','sass-loader']
       })
   }
   ~~~


