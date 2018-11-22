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


