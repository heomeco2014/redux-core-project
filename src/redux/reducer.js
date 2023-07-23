import { combineReducers } from 'redux'
import filterReducer from '../components/Filter/FilterSlice'
import searchReducer from '../components/Search/SearchSlice'
import todosReducer from '../components/TodoList/TodosSlice'

const rootReducer = combineReducers({
    search: searchReducer,
    todoList: todosReducer,
    filter: filterReducer,
})

export default rootReducer
