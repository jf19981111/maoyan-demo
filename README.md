## 项目配置 sass 或 less

> 一个项目中的配置都是基于你所选择的哪一个模块来作为项目的模块，然后根据那个模块的要求来进行配置

#### 使用 antd 作为项目的模板

- sass 只需要安装 node-sass 这个模块即可
- less
    - yarn add less-loader less
    - yarn add react-app-rewired customize-cra (按需加载)
    - 修改 package.json 脚本文件
    - 在项目的根目录下创建 config-overrides.js 文件，做配置
    - 重启项目

## 项目配置 antd-mobile

- yarn add antd-mobile
- yarn add babel-plugin-import

## 项目需要的模块

- axios
- react-router-dom
- redux
- antd （找一个UI组件库）
