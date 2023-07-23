export const addTodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: data,
    }
}
export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id,
    }
}
export const searchTodo = (data) => {
    return {
        type: 'SEARCH_TODO_CHANGE',
        payload: data,
    }
}
export const filterByStatus = (status) => {
    return {
        type: 'FILTER_BY_STATUS_CHANGE',
        payload: status,
    }
}

export const filterByPriority = (priority) => {
    return {
        type: 'FILTER_BY_PRIORITY_CHANGE',
        payload: priority,
    }
}
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        payload: id,
    }
}
