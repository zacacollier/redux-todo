import { combineReducers } from 'redux'
import todos from './todos.js'
import visibilityFilter from './visibilityFilter.js'

const toDoApp = combineReducers({
    todos,
    visibilityFilter
})

export default toDoApp
