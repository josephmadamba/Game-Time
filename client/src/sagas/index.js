import { takeEvery } from 'redux-saga/effects'

const handleNewMessage = function * handleNewMessage (params) {
  const socket = new WebSocket('ws://localhost:3000')
  yield takeEvery('UPDATE_GAMES', (action) => {
    socket.send(JSON.stringify(action))
  })
}

export default handleNewMessage
