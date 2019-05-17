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
