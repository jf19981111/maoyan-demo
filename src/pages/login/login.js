import React from 'react'
import { connect } from 'react-redux'

import { 
    setUsername,
    setPassword,
    handelLogin
 } from './store/createAction'

import { InputItem, Button } from 'antd-mobile'

class Login extends React.Component {
    render() {
        const { username, password, handelLogin, setUsername, setPassword } = this.props
        return (
            <React.Fragment>
                <div style={{marginBottom: 30}}>
                    <InputItem 
                        placeholder="用户名..."
                        value={ username }
                        onChange={ setUsername } 
                    />
                    <InputItem 
                        placeholder="请输入密码..."
                        type="password"
                        value={ password }
                        onChange={ setPassword }
                    />
                </div>
                <Button 
                    type="primary"
                    onClick={ handelLogin }
                >
                登录</Button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.getIn(['user', 'username']),
        password: state.getIn(['user', 'password'])
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setUsername: (value) => {
            dispatch(setUsername(value))
        },
        setPassword: (value) => {
            dispatch(setPassword(value))
        },
        handelLogin: () => {
            // 这里如何获取仓库的中用户名和密码
            dispatch(handelLogin(ownProps.history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
