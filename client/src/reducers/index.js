
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers


import user from './userReducer'
import games from './gamesReducer'
const rootReducer = combineReducers({
    user: user,
    games
});

export default rootReducer;