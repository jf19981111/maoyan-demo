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
4. 一般 reducer 中使用 switch 来匹配 action 动作


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

> 存放动作类型的常量，然后暴露出去，全局唯一性


### redux 中的 reducer 拆分

1. 从主 reducer 拆分出去小的，每个小功能点都创建一个 store/reducer 然后在 主reducer 中引入即可，
2. 随时注意 state 为 undefined 的情况，一般都需要来一个 默认赋值
3. 还要注意拆分出去之后，主 reducer 的层级变了，然后从仓库中获取数据的时候需要注意层级结构来 . 调用

- 传统方法

```js
// 主 reducer
import todoReducer from '@/pages/home/cinema/store/reducer'
import movieReducer from '@/pages/home/movie/store/reducer'

// 因为 state 已经很庞大了，所以我们传递进去的时候，就把相应的 reducer 对象传递进去，随时要注意 undefined 的情况
export default (state = {} , action) => {
   return {
       todo: todoReducer(state.todo, action),
       movie: movieReducer(state.movie, action)
   }
}
```

- 使用 combineReducers 来结合拆分 （针对主 reducer）

```js
// 主 reducer
import { combineReducers } from 'redux'

import todoReducer from '@/pages/home/cinema/store/reducer'
import movieReducer from '@/pages/home/movie/store/reducer'

export default combineReducers({
    todo: todoReducer,
    movie: movieReducer 
})
```

### redux 中的 createActions

> 一个函数，由它来创建动作对象，返回一个对象
createActions 里面的函数，要么是异步动作函数，要么是返回一个异步动作函数，要么是一个普通函数，返回一个动作对象

1. 当创建动作之后，我们派发动作 则是要，使用我们创建动作的那个方法，执行（调用）一下

```js
// 创建动作的文件 createAction.js

import {
    INPUT_VALUE,
} from './actionTypes'

/***
 * 获取 input 框输入的动作
 * @return {Object} inputChange 的动作对象
 */
export const getInputChgAction = () => {
    return {
        type: INPUT_VALUE,
    }
}

// xxx.js
// 1. 引入创建动作的文件
import { getInputChgAction } from './store/createActions'
/**
 * chgInput 输入框事件，改变仓库的inputVal
 * @param {String} value 输入的值
 */
chgInput(value) {
    store.dispatch(getInputChgAction(value))
}
```

# ? React Element 是什么
> 可以认为在写JSX，但实际上是在调用一个函数，这个函数返回了一个对象


### redux 中的中间件

- redux-logger

1. 安装 `yarn add redux-logger`
2. 在创建 store 的位置引入并使用它
    - 在 redux 上引入 `applyMiddleware` (这是使用了中间件之后要引入的) 
    它是 Redux 的原生方法，作用是将所有中间件组成一个数组，依次执行
    - 引入安装的 logger
    - 在创建store 的里面使用 `applyMiddleware(logger)`

PS:当使用了中间件之后，之前为了支持redux工具的那段代码不能用了，需要重新修改,根据官方文档来操作

```js
// 这个就是我们创建仓库的 js 文件

import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(logger)
    )
    
)
export default store;

```

- redux-thunk

> 使用这个中间件之后，能让我们的 store.dispatch 这个方法不光能接受对象，也能接受一个异步动作函数

1. 安装 `yarn add redux-thunk`
2. 在创建 store 的位置引入并使用它

PS: 日志信息中间件放置在最后

3. 使用 thunk，就需要把 creatAction 中创建的动作改成，返回一个函数，做异步的代码 (使用了闭包)
    --- 需要传参就使用闭包的形式
    --- 不需要传参就直接返回函数，不调用
```js
export const getDelTodoAction = (index) => {
    // return 出去的是异步动作函数
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: DEL_TODO,
                index
            })
        }, 1000)
    }
}
```

#### 函数式编程


# react-redux

> 为了让react跟redux更加很好的去使用，提供了一个插件的模块 react-redux

### UI组件 与 容器组件

> 目前的一个组件上面，又有ui的渲染，又有数据的处理，希望能将这两块东西进行拆分

- UI组件，只需要负责UI的渲染，它身上的数据都要从容器组件给他传递过来
- 容器组件，只负责数据的处理与传递，它身上不用处理UI的渲染

#### 我们需要的是，自己写ui组件，然后由react-redux给我们生成容器组件

## 使用步骤
1. 安装 `yarn add react-redux`
2. 使用 Prodiver 组件，将 store主动传递给项目的所有组件
3. 使用它的 connect 方法，根据某个ui组件自动生成容器组件
        `connect(mapStateToProps, mapDispatchToProps)(ui组件)`
    - mapStateToProps

        1. 能够将redux中的state数据映射到ui组件props中去
        
    - mapDispatchToProps

        1. 能够将redux中的某个动作映射到ui组件的props中去

# immutable

> 它能够帮组我们创建一个不可变的数据

- 有几种数据类型
1. List: 有序索引集，类似JavaScript中的Array
2. Map: 无序索引集，类似JavaScript中的Object
...主要用的最多的两种

直接使用 JSON.parse(JSON.stringify(state)) 的方式来操作state，没有问题，但是有性能问题

于是采用 immutable 的方式来解决这个问题

## 使用

1. 安装 `yarn add immutable redux-immutable`

- 要在我们的主reducer中引入的地方
`import {combineReducers} from 'redux-immutable`

immutable中的API:

- fromJS()

作用: 
> 将一个普通的js数据转换成 immutable 类型的数据
用法: `fromJS(value, converter)`
简介: value是要转变的数据，converter是要做的操作。第二个参数可不填，默认情况会将数组准换为List类型，将对象转换为Map类型，其余不做操作。

- toJS()
作用:
> 将一个immutable数据转换为JS类型的数据
用法: `value.toJS()`

- 数据修改
注: 这里对于数据的修改，是对原数据进行操作后的值赋值给一个新的数据，并不会对原数据进行修改，因为Immutable是不可变的数据类型。
- set()
> 修改某个 immutable 数据的属性，不会改变原始的数据，会返回一个新的 immutable 的数据

- setIn()
> 设置深沉结构的数据

- get()
> 从某个 immutable 数据身上获取某个属性

- getIn()
> 获取深层次的数据

```js
import { fromJS } from 'immutable'

let state = fromJS({
    name: 'zhangsan',
    age: 18,
    list: [1,2,3],
    address: {
        hello: {
            a: 'a'
        }
    }
})

// 将state中的list 2 修改为5
let newState = state.setIn(['list', 1], 5)
console.log(newState.toJS())
// 将state中的address hello a 修改为 b
let new2State = newState.setIn(['address', 'hello', 'a'], 'b')


```
# 什么是mockjs
- mock 是一个模拟数据生成器
- 模拟 ajax请求，生成请求数据
- 基于html模板生成模拟数据

优点:
1. 简单方便，无入侵性，基本覆盖常用的接口数据类型
2. 可以模拟哪些无法访问的资源
3. 无需担心网速不好
4. 开发时，如果后端还没有完成数据输出，前端可自写静态模拟数据，前后端分离，提高效率

# mock.js 的使用

1. 安装 `yarn add mockjs -D`
2. 创建一个 mockData 文件夹，里面创建一个index.js
3. 入口 js 中，将第二步中的js文件进行引入

```js
import Mock from 'mockjs'

Mock.mock('/api/getFilm', {
    msg: 'hello'
})
```

API:
- Mock.mock( rurl?, rtype?, template|function( options ))

`Mock.mock( template )`
根据数据模板生成模拟数据。

`Mock.mock( rurl, template )`
记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。

`Mock.mock( rurl, function( options ) )`
记录用于生成响应数据的函数。当拦截到匹配 rurl 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。

`Mock.mock( rurl, rtype, template )`
记录数据模板。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。

`Mock.mock( rurl, rtype, function( options ) )`
记录用于生成响应数据的函数。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。

`rurl`
可选。

表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。例如 `/\/domain\/list\.json/、'/domian/list.json'`。

`rtype`
可选。

表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等。

`template`
可选。

表示数据模板，可以是对象或字符串。例如 { 'data|1-10':[{}] }、'@EMAIL'。

`function(options)`
可选。

表示用于生成响应数据的函数。

`options`
指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性

从 1.0 开始，Mock.js 通过覆盖和模拟原生 XMLHttpRequest 的行为来拦截 Ajax 请求，不再依赖于第三方 Ajax 工具库（例如 jQuery、Zepto 等）。
