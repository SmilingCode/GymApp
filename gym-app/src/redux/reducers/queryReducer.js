const queryReducer = (state = {
    // show or hide component
    queryState: null,
    // response of user searching
    queryRes: [],
    // current page date
    pageId: 0,
    // user clicked food item info
    currentFoodInfo: {},
    // all food items that user added in
    userFoodList: []
}, action) => {
    switch(action.type) {
        case 'GET_QUERY_STATE':
            return {...state, queryState: action.payload}
        case 'GET_QUERY_RES':
            return {...state, queryRes: action.payload}
        case 'UPDATE_MOVE_RIGHT':
            return {...state, pageId: state.pageId - 1}
        case 'UPDATE_MOVE_LEFT':
            return {...state, pageId: state.pageId + 1}
        case 'STORE_CURRENT_FOOD':
            return {...state, currentFoodInfo: action.payload}
        case 'STORE_USER_FOOD':
            return {...state, userFoodList: state.userFoodList.concat(action.payload)}
        default:
            return state;
    }
}

export default queryReducer;
