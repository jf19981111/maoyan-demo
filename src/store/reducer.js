// 主 reducer

import { 
    INPUT_VALUE,
    ADD_TODO,
    DEL_TODO,
    SET_MOVIE_LIST 
} from './actionTypes'

const defaultState = {
    inputVal: 'zhangsan', // input 输入框的内容
    todoList: [
        { id: 1, name: '吃饭' },
        { id: 2, name: '睡觉' },
        { id: 3, name: '打豆豆' },
    ], // 代办事项
    movieList: [], // 影片列表数据
}

export default (state = defaultState, action) => {
    // console.log(1111)
    let newState = JSON.parse(JSON.stringify(state))
    // console.log(newState)
    switch (action.type) {
        case INPUT_VALUE:
            newState.inputVal = action.value
            break;
        case ADD_TODO:
            // console.log(newState)
           newState.todoList = [...state.todoList, { id: state.todoList.length + 1, name: action.text }]
           newState.inputVal = ''
            break;
        case DEL_TODO:
            let newTodoList = [...state.todoList]
            newTodoList.splice(action.index, 1)
            newState.todoList = newTodoList
            break;
        case SET_MOVIE_LIST:
            newState.movieList = action.list
            break;
        default:
            break;
    }
    return newState;
}
