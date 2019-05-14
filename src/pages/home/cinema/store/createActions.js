// 创建动作的文件

import {
    INPUT_VALUE,
    ADD_TODO,
    DEL_TODO,
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
 * @param {Number} index 下标
 * @return {Object} 返回一个动作对象
 */
export const getDelTodoAction = (index) => {
    return {
        type: DEL_TODO,
        index
    }
}
