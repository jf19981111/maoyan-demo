// 专门管理 cinema 相关的 reducer
import { 
    INPUT_VALUE,
    ADD_TODO,
    DEL_TODO,
    INIT_TODO,
} from './actionTypes'

const defaultState = {
    inputVal: 'zhangsan', // input 输入框的内容
    todoList: [
        // { id: 1, name: '吃饭' },
        // { id: 2, name: '睡觉' },
        // { id: 3, name: '打豆豆' },
    ], // 代办事项
}


export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case INPUT_VALUE:
            newState.inputVal = action.value
            break;
        case ADD_TODO:
            newState.todoList = [...state.todoList, { id: state.todoList.length + 1, name:  newState.inputVal }]
            newState.inputVal = ''
            break;
        case DEL_TODO:
            let newTodoList = [...state.todoList]
            newTodoList.splice(action.index, 1)
            newState.todoList = newTodoList
            break;
        case INIT_TODO:
            newState.todoList = action.list
            break;
        default:
            break;
    }
    return newState;
}
