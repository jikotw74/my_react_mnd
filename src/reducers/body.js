const initState = {
    children: []
};

const body = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_BODY_CHILDREN':
            return {
                ...state, 
                children: action.children
            }
        // case 'TOGGLE_TODO':
        //     return state.map(todo =>
        //         (todo.id === action.id) ? {...todo, completed: !todo.completed } : todo
        //     )
        default:
            return state
    }
}

export default body