
import { combineReducers } from 'redux'

// Reducers
import user from './userReducer'
import games from './gamesReducer'
import myGames from './myGamesReducer'

const rootReducer = combineReducers({
  user,
  games,
  myGames
})

export default rootReducer
