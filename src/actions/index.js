export const updateAppSelected = (selected, home) => ({
    type: 'UPDATE_APP_SELECTED',
    selected,
    home
});

export const updateBodyChildren = (children) => ({
    type: 'UPDATE_BODY_CHILDREN',
    children
});

export const updateDialogChildren = (children) => ({
    type: 'UPDATE_DIALOG_CHILDREN',
    children
});

export const openDialog = (children) => ({
    type: 'OPEN_DIALOG',
    children
});

export const closeDialog = () => ({
    type: 'CLOSE_DIALOG'
});

export const openTaiwanLeft = (selected) => ({
    type: 'OPEN_TAIWAN_LEFT',
    selected
});

export const openTaiwanRight = (selected) => ({
    type: 'OPEN_TAIWAN_RIGHT',
    selected
});

export const moveTaiwanOrigin = () => ({
    type: 'MOVE_TAIWAN_ORIGIN'
});

export const updateMatterSelected = (selected) => ({
    type: 'UPDATE_MATTER_SELECTED',
    selected
});

export const updateVideoSelected = (selected) => ({
    type: 'UPDATE_VIDEO_SELECTED',
    selected
});

export const updateUnitsCancel = (cancel) => ({
    type: 'UPDATE_UNITS_CANCEL',
    cancel
});

export const updateUnitsSubSelected = (subSelected) => ({
    type: 'UPDATE_UNITS_SUB_SELECTED',
    subSelected
});

export const updateUnitsPeople = (people) => ({
    type: 'UPDATE_UNITS_PEOPLE',
    people
});