// 容器组件，由react-redux自动生成
import { connect } from 'react-redux'
import Ui from './ui'
import { 
    getInputChgAction, 
    getAddTodoAction, 
    getDelTodoAction, 
    getInitTodoAction 
} from './store/createActions'

/**
 * 映射数据到ui组件props的身上
 * @param {Object} state redux身上的state （主的state）
 * @return {Object} 映射到ui组件身上的props
 */
const mapStateToProps = ({ todo }) => {
    return {
        inputVal: todo.inputVal,
        todoList: todo.todoList
    }
}


/**
 * 映射动作到ui组件身上
 * @param {Function} dispatch store.dispatch
 * @return {Object} 映射到UI组件的props身上 方法
 */
const mapDispatchToProps = (dispatch) => {
    return {
        chgInput: (value) => {
            dispatch(getInputChgAction(value))
        }, 
        addTodo: () => {
            dispatch(getAddTodoAction())
        },
        delTodo: (index) => {
            dispatch(getDelTodoAction(index))
        },
        initTodo: () => {
            dispatch(getInitTodoAction)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Ui)
