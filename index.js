import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './src/container/store';
import App from './App';
import './index.less';

ReactDOM.render(
    <Provider
        store={store}
    >
        <Router>
                <App/>
        </Router>
    </Provider>,
    document.querySelector('#target'),
);