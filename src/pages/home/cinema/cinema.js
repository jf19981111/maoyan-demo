import React from 'react'


import store from '@/store'
import Ui from './ui'

import { getInputChgAction, getAddTodoAction, getDelTodoAction, getInitTodoAction } from './store/createActions'


class Cinema extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputVal: store.getState().todo.inputVal,
            todoList: store.getState().todo.todoList,
        }

        /**
         * 需要手动监听仓库的变化
         * @return {Function} 调用这个返回值可以销毁这个监听
         */
        this.unSub = store.subscribe(() => {
            console.log('todoList', this)
            this.setState(() => ({
                inputVal: store.getState().todo.inputVal,
                todoList: store.getState().todo.todoList,
            }))
        })

        this.chgInput = this.chgInput.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.delTodo = this.delTodo.bind(this)
    }
    render() {
        return(
            <Ui 
                inputVal={this.state.inputVal}
                todoList={this.state.todoList}
                chgInput={this.chgInput}
                addTodo={this.addTodo}
                delTodo={this.delTodo}
            />
        )
    }

    /**
     * chgInput 输入框事件，改变仓库的inputVal
     * @param {String} value 输入的值
     */
    chgInput(value) {
        store.dispatch(getInputChgAction(value))
    }

    /**
     * addTodo 添加操作
     */
    addTodo() {
        store.dispatch(getAddTodoAction())
    }

    /**
     * delTodo 删除 todo
     * @param {Number} index 下标
     */
    delTodo(index) {
        store.dispatch(getDelTodoAction(index))
    }

    /**
     * 页面一加载的时候请求 todo 数据
     */
    componentDidMount() {
        store.dispatch(getInitTodoAction) 
    }

    /**
     * componentWillUnmount 组件销毁
     */
    componentWillUnmount() {
        this.unSub()
    }
}

export default Cinema;
