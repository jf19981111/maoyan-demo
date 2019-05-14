// 主 reducer
import { combineReducers } from 'redux'

import todoReducer from '@/pages/home/cinema/store/reducer'
import movieReducer from '@/pages/home/movie/store/reducer'


export default combineReducers({
    todo: todoReducer,
    movie: movieReducer 
})

// 因为 state 已经很庞大了，所以我们传递进去的时候，就把相应的 reducer 对象传递进去，随时要注意 undefined 的情况
// export default (state = {} , action) => {
//    return {
//        todo: todoReducer(state.todo, action),
//        movie: movieReducer(state.movie, action)
//    }
// }
