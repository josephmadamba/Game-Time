const gameState = []

const gameReducer = (state = gameState, action) => {
  // Deep Copy
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'UPDATE_GAMES':
      newState = action.payload
      return newState
    default:
      return state
  }
}

export default gameReducer
