import queryReducer from './queryReducer';
import mockReducer from './mockReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    queryReducer,
    mockReducer
});

export default allReducers;
