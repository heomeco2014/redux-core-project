export const todoListSelector = (state) => {
    const todosRemaining = state.todoList.filter((todo) => {
        return todo.title.includes(state.search)
    })
    return todosRemaining
}

export const searchTextSelector = (state) => state.search
export const filterByStatusSelector = (state) => state.filterByStatus
export const prioritySelector = (state) => state.priority
