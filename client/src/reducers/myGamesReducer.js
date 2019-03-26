const myGameState = []

const myGameReducer = (state = myGameState, action) => {
  // Deep Copy
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'ADD_MY_GAME':
      newState.concat(action.user, action.game)
      console.log(newState)
      return newState
    default:
      return state
  }
}

export default myGameReducer
