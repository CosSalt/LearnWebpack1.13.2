var htmlWebpackPlugin =require('html-webpack-plugin')

module.exports = {
  //entry: ['./src/script/main.js','./src/script/a.js'],
  entry: {
    main: './src/script/main.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
    c: './src/script/c.js'
  },
  output:{
    path:'./dist',
    filename: 'js/[name]-[chunkhash].js',
    //publicPath: "https://hosalt.cn/api" //线上地址
    publicPath: "/"
  },
  plugins:[
    new htmlWebpackPlugin({
      //filename:'index-[hash].html',
      filename:'index.html',
      template:'index.html',
      //inject:'head',
      //inject:'body',
      //inject:true, //与body类似
      //inject:false, //不加载js,适合在index.html中根据参数手动写js
      inject:false,
      title:'webpack is good',
      minify:{//代码压缩
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new htmlWebpackPlugin({
      filename:'a.html',
      template:'index.html',
      inject:false,
      title:'this is a.html',
      /*minify:{//代码压缩
        removeComments: true,
        collapseWhitespace: true
      }*/
      chunks:['main','a']
    }),
    new htmlWebpackPlugin({
      filename:'b.html',
      template:'index.html',
      inject:false,
      title:'this is b.html',
      /*minify:{//代码压缩
        removeComments: true,
        collapseWhitespace: true
      }*/
      chunks:['b']
    }),
    new htmlWebpackPlugin({
      filename:'c.html',
      template:'index.html',
      inject:false,
      title:'this is c.html',
      minify:{//代码压缩
        removeComments: true,
        collapseWhitespace: true
      },
      chunks:['main','b','c']
    })
  ]
}