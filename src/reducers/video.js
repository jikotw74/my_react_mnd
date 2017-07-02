const initState = {
    selected: 0
};

const video = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_VIDEO_SELECTED':
            return {
                ...state, 
                selected: action.selected
            }
        // case 'TOGGLE_TODO':
        //     return state.map(todo =>
        //         (todo.id === action.id) ? {...todo, completed: !todo.completed } : todo
        //     )
        default:
            return state
    }
}

export default video