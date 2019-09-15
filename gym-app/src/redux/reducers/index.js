import queryReducer from './queryReducer';
import mockReducer from './mockReducer';
import { combineReducers } from 'redux';

// combine 2 reducers
const allReducers = combineReducers({
    queryReducer,
    mockReducer
});

export default allReducers;
