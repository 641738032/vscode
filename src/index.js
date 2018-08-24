import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import reducer from "./redux/index.js";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './utils/imgSuffix.js';
import App from "./components/App.js";
import Login from './pages/login/Login';
import Todos from './pages/todos/Todos';


const store = createStore(
    reducer,
    applyMiddleware(thunk,createLogger())
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Redirect from="/" to="manage/login" />
            <Route path="/manage" component={App}>
                <Route path="/manage/login" component={Login}/>
                <Route path="/manage/todos" component={Todos}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();