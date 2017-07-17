const initState = {
    open: false,
    isLeft: false,
    selected: 0,
    subSelected: 0,
    cancel: false,
    people: false
};

const unit = (state = initState, action) => {
    switch (action.type) {
        case 'OPEN_TAIWAN_LEFT':
            return {
                ...state, 
                open: true, 
                isLeft: true,
                selected: action.selected,
                subSelected: 0,
                people: false
            }
        case 'OPEN_TAIWAN_RIGHT':
            return {
                ...state, 
                open: true,
                isLeft: false,
                selected: action.selected,
                subSelected: 0,
                people: false
            }
        case 'MOVE_TAIWAN_ORIGIN':
            return {
                ...state,
                open: false,
                isLeft: false,
                selected: 0,
                subSelected: 0,
                people: false
            }
        case 'UPDATE_UNITS_CANCEL':
            return {
                ...state,
                cancel: action.cancel
            }
        case 'UPDATE_UNITS_SUB_SELECTED':
            return {
                ...state,
                subSelected: action.subSelected
            }
        case 'UPDATE_UNITS_PEOPLE':
            return {
                ...state,
                people: action.people
            }
        default:
            return state
    }
}

export default unit