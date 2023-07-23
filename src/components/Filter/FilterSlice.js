const initState = {
    filterByStatus: 'All',
    priority: [],
}

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FILTER_BY_STATUS_CHANGE': {
            return {
                ...state,
                filterByStatus: action.payload,
            }
        }

        case 'FILTER_BY_PRIORITY_CHANGE': {
            return {
                ...state,
                priority: action.payload,
            }
        }
        default:
            return state
    }
}

export default filterReducer
