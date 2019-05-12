// 一级路由页面
import React from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from './pages/home/home'
import Detail from './pages/detail/detail'

class App extends React.Component {
    render() {
        return(
            <React.Fragment>
            <Switch>
                <Route
                    path="/shows/:movieId"
                    component={ Detail }
                ></Route>
                <Route
                    path="/"
                    component={ Home }
                ></Route>
            </Switch>
            </React.Fragment>
        )
    }
}

export default App;
