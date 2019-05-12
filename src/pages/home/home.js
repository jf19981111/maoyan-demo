import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Tabs from '../../common/tabs'
import Cinema from './cinema/cinema'
import Movie from './movie/movie'
import Center from './center/center'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                { id: 'movie', name: '电影', icon: '' },
                { id: 'cinema', name: '影院', icon: '' },
                { id: 'center', name: '我的', icon: '' }
            ],
        }
    }
    render() {
        return(
            <div>
                {/* 这个上面是放坑的 */}
                <Switch>
                    <Route path='/movie' component={Movie}></Route>
                    <Route path='/cinema' component={Cinema}></Route>
                    <Route path='/center' component={Center}></Route>
                    <Redirect to="/movie"></Redirect>
                </Switch>
                <Tabs tabs={ this.state.tabs }></Tabs>
            </div>
        )
    }
}

export default Home;
