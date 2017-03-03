require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('fetch-ie8');

//import 'core-js/fn/object/assign';
require('./styles/App.css')
const React = require('react')
const ReactDOM = require('react-dom');
const { createStore,applyMiddleware } = require('redux')
const { Provider } = require('react-redux')
const  thunk  = require('redux-thunk').default;

const { RouteConfig } = require('./router.js')//路由表
const {rootReducer} = require('./reducers/index.js')
//入口文件不能用es6-promise 的import语法ie8不兼容 后面的文件可以用因为引入了es5-shim
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/Main';

//Render the main component into the dom

let store = createStore(rootReducer,applyMiddleware(thunk))//添加中间件使dispatch能接受函数作为参数
ReactDOM.render(
    (<Provider store={store}>
        {RouteConfig}
    </Provider>)
    ,document.getElementById('app'));
