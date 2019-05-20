import http from '@/utils/http'
import { SET_MOVIE_LIST } from './actionTypes'
import { Toast } from 'antd-mobile'


/**
 * 获取电影列表
 * @param {Function} dispatch 
 */
export const getMovieListAction = (dispatch) => {
    Toast.loading('加载中...')
    setTimeout(() => {
        http.get('/ajax/movieOnInfoList?token=').then(res => {
            dispatch({
                type: SET_MOVIE_LIST,
                list: res.movieList
            })
        })
        Toast.hide()
    }, 1000)
}
