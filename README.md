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
- 修改 config-overrides.js 文件
- 重启项目

## 使用作用域样式

- styled-components
> 能够帮我们创建样式组件
- yarn add styled-components
- 将 style.less 修改为 style.js
- 编写样式组件
- index.js 中引入 style.js 中写的样式



## 项目需要的模块

- axios
- react-router-dom
- redux
- antd （找一个UI组件库）


# redux

> 他是一款 JavaScript 的状态管理器

## Redux 的三大原则

- 单一数据源：整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中

- state 是只读的：唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象

- 使用纯函数来执行修改：为了描述 action 如何改变 state tree ，你需要编写 reducers。


## 使用步骤
1. 安装 yarn add redux

2. 需要有一个文件来创建仓库的实例对象 (比如 src/store/index.js)
```js
//引入 redux，在它的身上有一个 createStore 这个方法，然后使用 这个 createStore() 这个方法
import { createStore } from 'redux';
import reducer from './reducer'
/**
 * 创建 store 实例
 * @param {Funtion} reducer 接收reducer函数
 * @return {Object} store 仓库的 store 实例
 * 
 * 将 reducer 拆分出去
*/
const store = createStore(reducer)
export default store;
```
3. 由于 2 中的步骤，所以我们创建一个 reducer.js 的文件，然后暴露出去，接收两个参数
```js
/**
 * @param {Any} state 上一次仓库的数据
 * @param {Object} action 这次的动作
 * @return {Any} newState 一定要返回一个新的 state
*/
export default (state, action) => {
    return state
}
```
3. React 中哪里需要使用仓库的实例对象，哪里就引入即可 (上面就是 redux 的基本结构)
