
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers


import user from './userReducer'
const rootReducer = combineReducers({
    user: user
});

export default rootReducer;