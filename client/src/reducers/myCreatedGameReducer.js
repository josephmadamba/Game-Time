const myGameState = []

const myCreatedGame = (state = myGameState, action) => {
  // Deep Copy
  let newState = JSON.parse(JSON.stringify(state))
    console.log('Hello World!')
  switch (action.type) {
    case 'GET_MY_GAME':
      console.log(action, 'HERRO')
      console.log('PLEASEWORK')
      newState = action.value
      return newState
    default:
    console.log('action.type', action.type)
      return state
  }
}

export default myCreatedGame
