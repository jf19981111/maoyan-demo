import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import App from './App';
import './index.less'


ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);
