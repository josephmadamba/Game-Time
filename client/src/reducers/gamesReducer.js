const gameState = {
  gameData: [{ title: 'hello', time: '7:00', date: '3/20/2019', day: 0, description: 'coed blah blah blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah', joined: 0 },
    { title: 'hithere', time: '8:00', date: '3/21/2019', day: 1, description: 'have fun', joined: 0 },
    { title: '2345', time: '5:00', date: '3/22/2019', day: 2, description: 'coed', joined: 0 },
    { title: 'tewergst', time: '5:00', date: '3/23/2019', day: 3, description: 'coed', joined: 0 },
    { title: 'teswgwrt', time: '5:00', date: '3/24/2019', day: 4, description: 'coed', joined: 0 },
    { title: 'te54st', time: '5:00', date: '3/25/2019', day: 5, description: 'coed', joined: 0 },
    { title: 'twe54est', time: '5:00', date: '3/26/2019', day: 6, description: 'coed', joined: 0 },
    { title: 'te4334534st', time: '5:00', date: '3/22/2019', day: 2, description: 'coed', joined: 0 }
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
