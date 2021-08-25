<div align="center">
    <img src="./src/assets/images/logo.png"/>
    <h1>vue2-vant-template</h1>
</div>

## 项目简介
Vue2 Vant Template，基于Vue2 + Vue Router + Vuex + Vant等技术，实现的适配手机的开源免费模板，可用来快速开发H5应用。

## 特性
- Vue-cli4，初始化项目
- ESlint + Prettier，格式化和美化代码
- Git Hook，验证git代码提交，禁止提交未格式化的代码
- 支持多环境打包发布
- Viewport，vw自适应方案
- Vue，类似View，构建用户界面的渐进式框架
- Vue Router，Vue路由
- Vuex，Vue状态管理库
- Vuex-persistedstate，Vuex状态持久化
- Vant，移动端UI组件库
- Sass，Dark Sass
- moment，日期格式化
- easytimer，简单定时器
- store2，Better LocalStorage
- crypto-js，加解密
- axios，网络请求
- async-validator，异步验证表单请求
- accounting，金额格式化
- compression-webpack-plugin，打包Gizp压缩
- script-ext-html-webpack-plugin，按模块打包
- autoprefixer，css前缀

## 预览

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### 指定环境打包
```
yarn build:test
yarn build:uat
yarn build:prod
```

### 编码规范

1、所有的Component文件都是以大写开头 (PascalCase)

2、所有的.js文件都遵循横线连接 (kebab-case)

3、在views文件下，代表路由的.vue文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则

4、api下模块和view下模块，一一对应

### CSS
BEM：就是块（block）、元素（element）、修饰符（modifier）
```
.block{}
.block__element{}
.block--modifier{}

.block 代表了更高级别的抽象或组件。
.block__element 代表.block的后代，用于形成一个完整的.block的整体。
.block--modifier代表.block的不同状态或不同版本
```
