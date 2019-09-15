import { diet } from '../../share/mockData';

// mockReducer just simply reture mock data
const mockReducer = (state = diet, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default mockReducer;
