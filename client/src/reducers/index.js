
import { combineReducers } from 'redux'

// Reducers
import user from './userReducer'
import games from './gamesReducer'
import myGames from './myGamesReducer'
import myCreatedGame from './myCreatedGameReducer'

const rootReducer = combineReducers({
  user,
  games,
  myGames,
  myCreatedGame
})

export default rootReducer
