import React from 'react';
import { render } from 'react-dom'
import './index.css';
import Router from '@/router/router';
import {createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '@/pages/reducers';

// import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

import moment from 'moment';
moment.locale('zh-cn');

const middleware = [thunk];

const appCreateStore = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const store = appCreateStore(rootReducer);
  // ========================================
  
render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
)