const path = require('path')                          //path是Nodejs中的基本包,用来处理路径
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// webpack 打包资源 css、js、img、font等
module.exports = {
    entry: path.join(__dirname, 'src/index.js'),    // 声明js文件入口,__dirname根目录,用join拼接
    output: {       //声明出口文件
        filename: 'bundle.js',  //将挂载的App全部打包成一个bundle.js,在浏览器中可以直接运行的代码  
        path: path.join(__dirname, 'dist')      //bundle.js保存的位置
    },
    module: {       
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'                    //处理.vue文件
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',   // 将css样式写入html里面去
                    'css-loader'    // 处理css文件
                ]   
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,      //处理图片
                use: [
                    {                                   //loader是可以配置选项的,如下options
                        loader: 'url-loader',           //url-loader实际上依赖于file-loader,file-loader处理完文件可以保存为一个文件供处理
                        options: { 
                            limit: 1024,                //url-loader的好处是可以加一个限制的大小,对于小图片(设置小于1024),在范围内可直接将图片转换成base64码直接存放在js中,以减少http请求.
                            name: '[name].[ext]'        //输出文件的名字,[name] 文件原名,[ext]文件扩展名.
                            // name: '[name]-aaa.[ext]'        //输出文件的名字,[name] 文件原名,[ext]文件扩展名.
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}