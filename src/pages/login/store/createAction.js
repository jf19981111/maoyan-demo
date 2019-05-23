import http from '@/utils/http'
import { 
    SET_USER,
    CHG_USERNAME,
    CHG_PASSWORD

} from './actionTypes'

import store from '@/store'

/**
 * 登录方法
 * 需要从仓库接收 所以这里我们采用涌入store 的方式
 * @param {Object} history 操作能做编程式导航
 * @param {String} password 密码
 */
export const handelLogin = (history) => {
    return (dispatch) => {
        let state = store.getState()
        setTimeout(() => {
            http.post('http://localhost:7001/api/auth/sign-in', {
                username: state.getIn(['user', 'username']),
                password: state.getIn(['user', 'password'])
            }).then(res => {
                // console.log(res)
                if (res.code === 0) {
                    console.log(res)
                    dispatch({
                        type: SET_USER,
                        user: res.data
                    })
                    // 登录成功后，跳转首页
                    history.replace('/movie')
                } else {
                    console.log(res.msg)
                }
                
            })
        }, 1000)
    }    
}
/**
 * username
 */
export const setUsername = (value) => {
    return {
        type: CHG_USERNAME,
        value,
    }
}

/**
 * password
 */
export const setPassword = (value) => {
    return {
        type: CHG_PASSWORD,
        value,
    }
}
