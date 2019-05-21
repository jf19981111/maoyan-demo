import { fromJS } from 'immutable'

let state = fromJS({

        inputVal: 'zhangsan',
        todoList: [
            {
                id: 1,
                name: '吃饭'
            },
            {
                id: 2,
                name: '睡觉'
            },
            {
                id: 3,
                name: '打豆豆'
            }
        ]
})

// let newTodoList = state.getIn(['todo','todoList']).toJS().concat({id: state.getIn(['todo','todoList']).toJS().length + 1, name: state.get('inputVal')})
console.log(state.get( 'inputVal'))

// console.log(newTodoList)


/**
 * 
 * {
  todo: {
    inputVal: 'zhangsan',
    todoList: [
      {
        id: 1,
        name: '吃饭'
      },
      {
        id: 2,
        name: '睡觉'
      },
      {
        id: 3,
        name: '打豆豆'
      }
    ]
  },
  movie: {
    movieList: []
  }
}
 */
