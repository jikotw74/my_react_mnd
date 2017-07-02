const initState = {
    selected: 0,
    containerID: 'scrollMatterContainer',
    getScrollName: index => "Matter" + index
};

const matter = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_MATTER_SELECTED':
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

export default matter