# 使用第三方库

1. **直接npm下载，然后引入（完全可以使用，但是我个人不是很推荐）**

   ~~~js
   npm i jquery -D
   import $ from 'jquery'
   $(xxxx).on()
   $(xxx).css()
   ~~~

2. **使用ProvidePlugin(个人推荐此方式)**

   ~~~js
   const webpack = require('webpack');
   //在plugins里面使用:
   new webpack.ProvidePlugin({
       $:'jquery',
       lodash:'lodash'
       ....
   })
   ~~~



   **通过ProvidePlugin和 import直接引入区别:**

* import $ from 'jquery'，引入之后，无论你在代码中是否使用jquery，打包后，都会打进去，这样其实产生大量的冗余js

* Provideplugin, 只有你在使用到此库，才会打包