const gameState = []

const gameReducer = (state = gameState, action) => {
  // Deep Copy
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'UPDATE_GAMES':
      newState = action.payload
      console.log(newState, action.payload, '-----LOOK HERE-----')
      console.log(newState)
      return newState
    default:
      return state
  }
}

export default gameReducer
