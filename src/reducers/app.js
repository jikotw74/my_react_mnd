const initState = {
    home: true,
    selected: false
};

const app = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_APP_SELECTED':
            return {
                ...state, 
                selected: action.selected,
                home: action.home
            }
        // case 'TOGGLE_TODO':
        //     return state.map(todo =>
        //         (todo.id === action.id) ? {...todo, completed: !todo.completed } : todo
        //     )
        default:
            return state
    }
}

export default app