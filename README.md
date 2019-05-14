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


### 使用 redux 的小点
1. 当我们使用上 store 的时候，我们仓库会默认执行一遍 reducer
2. 当我们使用 开发工具的时候，需要 
    - 1.安装 yarn add redux-devtools

    - 2.然后在我们创建仓库的地方，配上 `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`
3. store 仓库的实例对象
    - 1. getState() 获取仓库的数据
    - 2. subscribe(cb) 监听仓库的数据变化，当仓库有变化的时候，cb就会执行，它会返回一个函数，可以用来取消监听
    - 3. dispatch(obj) 派发动作  obj---动作
    想要 修改仓库中的数据，就要派发一个动作 dispatch（PS：一个动作中必须要有 `type` 属性），然后派发该动作之后就进入 reducer中， 然后reducer根据动作的不同来处理不同的操作 
4. 当我们使用 subscribe 进行监听仓库的变化的时候，由于 第一点 中的，我们知道，如果在别的地方没有取消监听，那么别的地方派发动作，就会影响，导致报错，意思就是两个派发动作同时执行，同时要求仓库发生变化,即，在一个组件即将要销毁的时候，取消监听
```js
/**
 * 需要手动监听仓库的变化
 * @return {Function} 调用这个返回值，可以在componentWillUnmount销毁这个监听
*/
this.unSub = store.subscribe(() => {
    this.setState(() => ({
        ...
    }))
})

componentWillUnmount() {
    this.unSub()
}
```

### actionTypes 常量
