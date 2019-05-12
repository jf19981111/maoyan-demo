import React from 'react'

// 引入 antd-mobile 的组件
import { Button } from 'antd-mobile'

// 进入自己的组件
import Header from './common/header/header'

class App extends React.Component {
    render() {
        return(
            <div className="box">
                我的天
                <Button>点击</Button>
                <Header></Header>
            </div>
        )
    }
}

export default App;
