### 特性
* eslint 检查格式 + prettier 自动格式化
* typescript类型检查，babel codegen宏预编译
* postcss tailwindcss 组件语法 + stylelint格式检查


### 项目结构
```
├─ .storybook: storybook配置
├─ build
│  ├─ webpack.config.js: webpack基础配置
│  ├─ webpack.dev.conf.js: webpack开发环境配置
│  └─ webpack.prod.conf.js: webpack生产环境配置
├─ mock: mock数据服务
├─ public: index.html 入口文件
├─ src
│  ├─ charts: 图表组件目录
│  ├─ components: 通用组件目录
│  ├─ containers: 数据层组件目录
│  ├─ service: service，api目录
│  ├─ store: vuex目录
│  ├─ utils: 工具类及方法
│  ├─ global.d.ts: ts声明文件
│  ├─ index.css: 全局css
│  ├─ index.ts: 入口文件
│  ├─ routes.ts: 路由配置
│  └─ vue.config.ts: vue配置
├─ stories: storybook菜单导航配置
├─ babel.config.js: js配置
├─ postcss.config.js: css配置
└─ browserlistrc: 兼容性配置
```
