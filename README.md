# WEBPACK4_DEMO多页项目

> WEBPACK4_DEMO

**技术栈**

* webpack4.0
* es6
* scss
* postcss

**项目配置项**
``` bash
# 项目初始化
yarn
npm install
# 项目启动
yarn start / yarn run dev
npm start / npm run dev

# 项目发布
yarn run build
npm run build
```

**命名规范**

- 文件名：
单词用‘-’隔开，如：customer-service
**(文件名中严禁出现大写字字母和下划线)**

- 变量名：
使用小驼峰命名，如：customerService

首先看一下构建后目录
├── bin
│ ├── webpack.base.conf.js
│ ├── webpack.dev.conf.js
│ ├── webpack.prod.conf.js
│ ├── webpack.rules.conf.js
├── src
│ ├── plugins
│ ├── lib
│ ├── static
│ ├── .....
│ ├── pages
│ │ ├── index
│ │ │ ├── index.html
│ │ │ ├── index.js
│ │ │ └── index.scss
│ │ ├── login
│ │ │ ├── index.html
│ │ │ ├── index.js
│ │ │ └── index.scss

#[五个小技巧让你写出更好的 JavaScript 条件语句](https://juejin.im/post/5bb9e3085188255c352d7326)
* js-tips

#[ES9中的异步迭代器（Async iterator）和异步生成器（Async generator）](https://juejin.im/post/5c0fd5a26fb9a049c30b17fe)
#[es6 async函数的异步迭代器](https://blog.csdn.net/ixygj197875/article/details/79220542)
#[移动端适配总结](https://juejin.im/post/5c0dd7ac6fb9a049c43d7edc)
#[用于前端开发的webpack4配置【带注释】](https://juejin.im/post/5be45723e51d45305c2ceaf0)
#[【复习资料】ES6/ES7/ES8/ES9资料整理(个人整理)](https://juejin.im/post/5c02b106f265da61764aa0c1)
