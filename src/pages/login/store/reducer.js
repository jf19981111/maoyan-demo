import { fromJS } from 'immutable'
import { 
    SET_USER,
    CHG_USERNAME,
    CHG_PASSWORD
} from './actionTypes'

const defaultState = fromJS({
    loginUser: null,
    username:'',
    password: ''
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return state.set('user', action.user)
        case CHG_USERNAME:
            return state.set('username', action.value)
        case CHG_PASSWORD:
            return state.set('password', action.value)
        default:
            return state;
    }
}
