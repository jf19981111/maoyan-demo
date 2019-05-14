// 这个就是我们创建仓库的 js 文件

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;
