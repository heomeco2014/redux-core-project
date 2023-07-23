const initState = [
    { id: 1, status: 'Todo', title: 'Learn React', done: false, priority: 'High' },
    { id: 2, status: 'Todo', title: 'Learn Redux', done: false, priority: 'Low' },
    { id: 3, status: 'Todo', title: 'Learn JavaScript', done: false, priority: 'Medium' },
    { id: 4, status: 'Todo', title: 'Learn Chess', done: false, priority: 'Low' },
]

const todosReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'TOGGLE_TODO': {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, done: !todo.done, status: todo.done ? 'Todo' : 'Completed' }
                }
                return todo
            })
        }
        default:
            return state
    }
}

export default todosReducer
