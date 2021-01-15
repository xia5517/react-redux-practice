import { combineReducers } from 'redux'
import {todos, visibilityFilter} from './toDo/reducers'
import {list} from './waterfall/reducers'
export default combineReducers({
    todos,
    visibilityFilter,
    data: list
})