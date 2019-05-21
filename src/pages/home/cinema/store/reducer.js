// 专门管理 cinema 相关的 reducer
import { fromJS } from 'immutable'
import { 
    INPUT_VALUE,
    ADD_TODO,
    DEL_TODO,
    INIT_TODO,
} from './actionTypes'

const defaultState = fromJS({
    inputVal: 'zhangsan', // input 输入框的内容
    todoList: [], // 代办事项
})


export default (state = defaultState, action) => {
    switch (action.type) {
        case INPUT_VALUE:
           return state.set('inputVal', action.value)

        case ADD_TODO:
           var newState = state.getIn(['todoList']).concat({id: state.getIn(['todoList']).length + 1, name: state.get('inputVal')})
           var a = state.set('todoList', newState)
           return a.set('inputVal', '')
        case DEL_TODO:
            // 这里需要进行拷贝出来
            var newList =  [...state.get('todoList')]
            newList.splice(action.index, 1)
            return state.set('todoList', newList)
        case INIT_TODO:
            return state.set('todoList', action.list)
        default:
            return state;
    }
}
