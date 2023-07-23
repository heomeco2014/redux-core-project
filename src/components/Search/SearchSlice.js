const initState = {
    search: '',
}

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SEARCH_TODO_CHANGE': {
            return {
                ...state,
                search: action.payload,
            }
        }

        default:
            return state
    }
}

export default searchReducer
