// 创建动作的文件
import http from '@/utils/http'
import { Toast } from 'antd-mobile'

import {
    INPUT_VALUE,
    ADD_TODO,
    DEL_TODO,
    INIT_TODO,
} from './actionTypes'

/***
 * 获取 input 框输入的动作
 * @param {String} value 输入框的值
 * @return {Object} inputChange 的动作对象
 */
export const getInputChgAction = (value) => {
    return {
        type: INPUT_VALUE,
        value
    }
}


/**
 * 获取 addTodo 的动作
 * @return {Object} 返回一个动作对象
 */
export const getAddTodoAction = () => {
    return {
        type: ADD_TODO
    }
}


/**
 * 获取 delTodo 的动作
 * - 1.未使用中间件的时候
 * @param {Number} index 下标
 * @return {Object} 返回一个动作对象
 * - 2.使用中间件的格式
 * @return {Function} 返回一个函数，自动接受一个参数
 * @param {} dispatch 就是派发的的动作
 * 
 */
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


/**
 * 获取 初始化 todo数据
 * @param {Object} list todo默认的数据集合
 * @return {Object} 动作对象
 */
export const getInitTodoAction = (dispatch) => {
    Toast.loading('疯狂加载中...', 0)
    setTimeout(() => {
        http.get('/json/todo.json')
        .then(res => {
            dispatch({
                type: INIT_TODO,
                list: res.todo
            })
            Toast.hide()
        })
    }, 1000)
}
