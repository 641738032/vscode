import { combineReducers } from 'redux';
import {todos} from './todos.js';

const index = combineReducers({
    todos
});

export default index;