# v2ex_webapp

> 一个使用Vuex的个人项目，目标是把V2EX社区的基本功能用Vue2进行移动端的重构,整个项目约耗时一周的业余时间~

![功能](https://github.com/SD-Gaming/V2EX_WebAPP/blob/master/static/%E5%8A%9F%E8%83%BD%E5%B1%95%E7%A4%BAGIF.gif)

## Build Setup


``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 技术选型


使用Vue全家桶来实现这个项目，包括 Vue2.x + Vuex + Vue-router  + Webpack + ES6 + axios + SCSS 

UI框架在 muse-ui、vux、vonsic等等优秀框架里面选择了 muse-ui,因为它好看而且不需要深度的定制就可以用的很好

## 页面组件和路由
---

开始用 ProcessOn 写了简单组件结构和路由结构，方便整理思路
 ![思路](https://github.com/SD-Gaming/V2EX_WebAPP/blob/master/static/%E7%BB%84%E4%BB%B6%E8%AE%BE%E8%AE%A1.jpg)

 ## 跨域
 
 
v2ex提供的API限制了跨域行为，开始打算使用cors解决，但是发现同样不支持，
所以通过设置webpack的proxyTable来实现开发环境下的跨域。
 ```
// 项目\config\index.js
	proxyTable: {
	  '/api': {
		target: 'https://www.v2ex.com',
		changeOrigin: true,
		pathRewrite: {
		  '^/api': '/api'
		}
	  }
	}
 ```
 正式项目需要通过后端在服务器上进行设置才能解决，所以本项目没办法部署在gitpages上了。
 
 ##build准备
 ---
 
 项目完成后，在使用`npm run build`命令打包之前，不要忘了进行如下设置
 ```
// 项目项目\config\index.js
	build: {
		......
		assetsPublicPath: './',              //静态资源的引用路径，默认配置为 /，即网站根目录，当项目要部署到子文件夹时才需要更改
		productionSourceMap: false,  //默认为 true ,打包成生产环境时设置为 false
		......
	}
 ```
