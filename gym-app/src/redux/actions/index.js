export const get_query_state = (queryState) => {
    return {
        type: 'GET_QUERY_STATE',
        payload: queryState
    }
}

export const get_query_res = (queryRes) => {
    return {
        type: 'GET_QUERY_RES',
        payload: queryRes
    }
}

export const page_move_right = () => {
    return {
        type: 'UPDATE_MOVE_RIGHT'
    }
}

export const page_move_left = () => {
    return {
        type: 'UPDATE_MOVE_LEFT'
    }
}

export const current_food_detail = (currentFoodInfo) => {
    return {
        type: 'STORE_CURRENT_FOOD',
        payload: currentFoodInfo
    }
}

export const user_food_detail = (foodDetail) => {
    return {
        type: 'STORE_USER_FOOD',
        payload: foodDetail
    }
}
