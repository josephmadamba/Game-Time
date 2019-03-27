const myGameState = []

const myGameReducer = (state = myGameState, action) => {
  // Deep Copy
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'ADD_MY_GAME':
      const { gameID } = action
      newState = gameID
      return newState
    default:
      return state
  }
}

export default myGameReducer
