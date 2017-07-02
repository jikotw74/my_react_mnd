const initState = {
    open: false,
    children: [],
    closeFunc: () => false
};

const dialog = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_DIALOG_CHILDREN':
            return {
                ...state, 
                children: action.children
            }
        case 'OPEN_DIALOG':
            return {
                ...state, 
                open: true,
                children: action.children
            }
        case 'CLOSE_DIALOG':
            return {
                ...initState
            }
        default:
            return state
    }
}

export default dialog