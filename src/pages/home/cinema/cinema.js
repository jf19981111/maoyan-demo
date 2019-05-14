import React from 'react'
import { TodoWrapper } from './style'
import { InputItem, Button,Flex, List, WhiteSpace } from 'antd-mobile'

import store from '@/store'

import { 
    INPUT_VALUE,
    ADD_TODO,
    DEL_TODO,
} from '@/store/actionTypes'

class Cinema extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputVal: store.getState().inputVal,
            todoList: store.getState().todoList,
        }

        /**
         * 需要手动监听仓库的变化
         * @return {Function} 调用这个返回值可以销毁这个监听
         */
        this.unSub = store.subscribe(() => {
            console.log('todoList', this)
            this.setState(() => ({
                inputVal: store.getState().inputVal,
                todoList: store.getState().todoList,
            }))
        })

        this.chgInput = this.chgInput.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.delTodo = this.delTodo.bind(this)
    }
    render() {
        const { inputVal, todoList } = this.state
        return(
            <TodoWrapper>
                <h1>TodoList</h1>
                <Flex>
                    <Flex.Item>
                        <InputItem 
                            value={inputVal}
                            onChange={this.chgInput}
                        />
                    </Flex.Item>
                    <Flex.Item>
                        <Button 
                            type="primary"
                            onClick={this.addTodo}
                        > ADD</Button>
                    </Flex.Item>
                </Flex>

                <WhiteSpace></WhiteSpace>

                <List>
                    {
                        todoList.map((item, index) => {
                            return (
                                <List.Item 
                                    key={item.name}
                                    onClick={this.delTodo.bind(null, index)}
                            >{ item.name }</List.Item>
                            )
                        })
                    }
                    
                </List>


            </TodoWrapper>
        )
    }

    /**
     * chgInput 输入框事件，改变仓库的inputVal
     * @param {String} value 输入的值
     */
    chgInput(value) {
        store.dispatch({
            type: INPUT_VALUE,
            value,
        })
    }

    /**
     * addTodo 添加操作
     */
    addTodo() {
        store.dispatch({
            type: ADD_TODO,
            text: this.state.inputVal
        })
    }

    /**
     * delTodo 删除 todo
     * @param {Number} index 下标
     */
    delTodo(index) {
        store.dispatch({
            type: DEL_TODO,
            index,
        })
    }

    /**
     * componentWillUnmount 组件销毁
     */
    componentWillUnmount() {
        this.unSub()
    }
}

export default Cinema;
