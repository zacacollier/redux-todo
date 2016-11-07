import { connect } from 'react-redux'
import { toggleToDo } from '../actions'
import ToDoList from '../components/ToDoList'

const getVisibleToDos = (todos, filter) => {
    switch (filter) {
    case 'SHOW_ALL':
        return todos
    case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    default:
        throw new Error(`Unknown filter: ${filter}`)
    }
}
const mapStateToProps = (state) => {
    return {
        todos: getVisibleToDos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToDoClick: (id) => {
            dispatch(toggleToDo(id))
        }
    }
}

const VisibleToDoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)

export default VisibleToDoList
