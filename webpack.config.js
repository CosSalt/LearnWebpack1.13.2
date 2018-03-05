var htmlWebpackPlugin =require('html-webpack-plugin')
var path = require('path')

module.exports = {
  //entry: ['./src/script/main.js','./src/script/a.js'],
  entry: './src/app.js',
  output:{
    path:'./dist',
    //filename: 'js/[name]-[chunkhash].js',
    filename: 'js/[name].bundle.js',
    //publicPath: "https://hosalt.cn/api" //线上地址
    //publicPath: "/"
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        //exclude: './node_modules/',//exclude:没用？,要用绝对路径
        //include: './src',
        //exclude: path.resolve(__dirname,'node_modules'),
        include: path.resolve(__dirname,'src'), //__dirname 运行环境的(根)路径
        query:{
          presets: ['latest']
        }
      },{
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },{
        test:/\.less$/,
        loader: 'style!css?importLoaders=1!postcss!less'
      },{
        test: /\.html$/,
        loader: 'html-loader'
      },{
        test: /\.tpl$/,
        loader: 'ejs-loader'
      },{
        test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader:'file-loader',
        query:{
          name:'assets/[name]-[hash:5].[ext]'
        }
      },
    ]
  },
  postcss:[
    require('autoprefixer')({
      broswers:['lsat 5 versions']
    })
  ],
  plugins:[
    new htmlWebpackPlugin({
      //filename:'index-[hash].html',
      filename:'index.html',
      template:'index.html',
      //inject:'head',
      //inject:'body',
      //inject:true, //与body类似
      //inject:false, //不加载js,适合在index.html中根据参数手动写js
      //title:'webpack is good',
      inject: 'body',
      /*
      minify:{//代码压缩
        removeComments: true,
        collapseWhitespace: true
      }
      */
    })
  ]
}