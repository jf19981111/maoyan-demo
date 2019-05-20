import React from 'react'

import store from '@/store'

import { getMovieListAction } from './store/createActions'

import Ui from './ui'


class Movie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movieList: store.getState().movie.movieList
        }

        this.unSub = store.subscribe(() => {
            this.setState(() => ({
                movieList: store.getState().movie.movieList
            }))
        })
    }
    render() {
        return (
            <Ui 
                movieList = {this.state.movieList}
            />
        )
    }

    /**
     * 请求数据
     */
    componentDidMount() {
        store.dispatch(getMovieListAction)
    }

    /**
     * componentWillUnmount 组件销毁监听
     */
    componentWillUnmount() {
        this.unSub()
    }
}

export default Movie;
