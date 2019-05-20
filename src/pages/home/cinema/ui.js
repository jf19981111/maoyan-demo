// 这个文件就是 cinema 页面的 ui组件
import React from 'react'

import { TodoWrapper } from './style'
import { InputItem, Button,Flex, List, WhiteSpace } from 'antd-mobile'

class UI extends React.Component {
    render() {
        const { inputVal, todoList, chgInput, addTodo, delTodo } = this.props;
        return (
            <TodoWrapper>
                <h1>TodoList</h1>
                <Flex>
                    <Flex.Item>
                        <InputItem 
                            value={ inputVal }
                            onChange={ chgInput }
                        />
                    </Flex.Item>
                    <Flex.Item>
                        <Button 
                            type="primary"
                            onClick={ addTodo }
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
                                    onClick={ delTodo.bind(null, index) }
                            >{ item.name }</List.Item>
                            )
                        })
                    }
                    
                </List>
            </TodoWrapper>
        )
    }

    /**
     * 初始化数据
     */
    componentDidMount() {
        this.props.initTodo()
    }
}

export default UI;
