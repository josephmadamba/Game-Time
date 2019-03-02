import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';


// Import any reducers
import todo from './todoReducer'



const rootReducer = combineReducers({
    todoReducer : todo
})

export default rootReducer