const gameState = {
  gameData: [{ title: 'hello', time: '7:00', date: '3/20/2019', description: 'coed blah blah blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah', joined: 0 },
    { title: 'hithere', time: '8:00', date: '3/21/2019', description: 'have fun', joined: 0 },
    { title: 'test', time: '5:00', date: '3/22/2019', description: 'coed', joined: 0 },
    { title: 'test', time: '5:00', date: '3/22/2019', description: 'coed', joined: 0 },
    { title: 'test', time: '5:00', date: '3/22/2019', description: 'coed', joined: 0 },
    { title: 'test', time: '5:00', date: '3/22/2019', description: 'coed', joined: 0 },
    { title: 'test', time: '5:00', date: '3/22/2019', description: 'coed', joined: 0 },
    { title: 'test', time: '5:00', date: '3/22/2019', description: 'coed', joined: 0 }
  ]
}

const gameReducer = (state = gameState, action) => {
  // Deep Copy
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    default:
      return state
  }
}

export default gameReducer
