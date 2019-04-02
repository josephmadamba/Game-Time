const myGameState = []

const myCreatedGame = (state = myGameState, action) => {
  // Deep Copy
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'GET_MY_GAME':
      newState = action.value
      return newState
    default:
      return state
  }
}

export default myCreatedGame
