// 一级路由页面
import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from './pages/home/home'
import Detail from './pages/detail/detail'

class App extends React.Component {
    render() {
        return(
            <Switch>
                <Route
                    parh="/shows/:movieId"
                    component={ Detail }
                ></Route>
                <Route
                    parh="/"
                    component={ Home }
                ></Route>
            </Switch>
        )
    }
}

export default App;
