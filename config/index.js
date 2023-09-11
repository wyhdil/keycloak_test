'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // '/api/avatar': {
      //   target: 'http://duckflew.cn:7010/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
      //   changOrigin: true,  //允许跨域
      //   logLevel:'debug',
      //   pathRewrite: {
      //     '^/api/avatar': '/oss/user/avatar/' 
      //   }
      // },
      // '/api/homeNews': {
      //   target: 'http://duckflew.cn:7010/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
      //   changOrigin: true,  //允许跨域
      //   logLevel:'debug',
      //   pathRewrite: {
      //     '^/api/homeNews': '/oss/news/cover/' 
      //   }
      // },
      '/api': {
        target: 'http://localhost:3000/',  //这里后台的地址模拟的;应该填写你们真实的后台接口
        changOrigin: true,  //允许跨域
        pathRewrite: {
          /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
            实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
           */
          '^/api': '' 
        },
        // ws: true //开启ws, 如果是http代理此处可以不用设置

      }, 

      
    },
    // proxy: {
    
    //   '/socket': {
    //   //webSocket代理
    //     target: 'ws://duckflew.cn:7010/', // 内网
    //     /*target: 'ws://你的服务器地址/parkingServer', // 外网*/
    //     /*target: 'ws://你的服务器地址/parkingServer',//本地测试*/
    //     ws:true,//开启ws, 如果是http代理此处可以不用设置
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/socket': '/'
    //     }
    //   }
    // },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8083, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
