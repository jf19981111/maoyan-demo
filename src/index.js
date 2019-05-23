import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import App from './App';
import './index.less'
import store from './store/index'

// 引入mockjs
import './mockData/index'


ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
