// 专门管理 movie 相关的 reducer
import { SET_MOVIE_LIST } from './actionTypes'

const defaultState = {
    movieList: [], // 影片列表数据
}


export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case SET_MOVIE_LIST:
            newState.movieList = action.list
            break;
        default:
            break;
    }
    return newState;
}
