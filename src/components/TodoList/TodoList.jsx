import React from 'react'
import Todo from '../Todo/Todo'
import { useDispatch, useSelector } from 'react-redux'
import { searchTextSelector, todoListSelector } from '../../redux/selector'
const TodoList = () => {
    const dispatch = useDispatch()
    const allTodos = useSelector((state) => state.todoList)
    const searchText = useSelector((state) => state.search.search)
    const filterByStatus = useSelector((state) => state.filter.filterByStatus)
    const filterByPriority = useSelector((state) => state.filter.priority)
    const isPrioritySelected = filterByPriority.length || 0
    const filteredTodos = allTodos.filter((todo) => {
        if (filterByStatus === 'All' && isPrioritySelected) {
            return todo.title.includes(searchText) && filterByPriority.some((priorityOption) => priorityOption.value === todo.priority)
        } else if (filterByStatus === 'All' && !isPrioritySelected) {
            return todo.title.includes(searchText)
        } else if (filterByStatus !== 'All' && !isPrioritySelected) {
            return todo.title.includes(searchText) && todo.status === filterByStatus
        }
    })

    return (
        <>
            {filteredTodos.map((todo, i) => {
                return <Todo key={i} todo={todo} />
            })}
        </>
    )
}

export default TodoList
