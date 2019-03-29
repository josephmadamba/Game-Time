import React from 'react'
import { connect } from 'react-redux'
import List from '../components/JoinGame/JoinGameList'
import axios from 'axios'

class MyGames extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showGames: null,
      getGames: false
    }
  }

  componentDidMount () {
    this.setState({ getGames: false })
    console.log('this.props.gameData ', this.props.myGames)
    axios.get('/mygames', { params: { user: this.props.user.id } })
      .then(games => {
        console.log('this.props.user', this.props.user)
        console.log('myGames from db', games)
        this.props.addMyGames(games.data.data)
        this.setState({ getGames: true })
      })
  }

  render () {
    console.log(this.props.myGames)
    return (
      this.props.myGames.userID.map((data, index) => {
        console.log(data)

        return (
          <List index={index}
            title={data.title}
            time={data.time}
            date={data.date}
            description={data.description}
            user={this.props.user}
            id={data.id}
          />
        )
      })
    )
  }
}

const mapStateToProps = (state) => ({
  myGames: state.myGames,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  addMyGames: (payload) => dispatch({
    type: 'ADD_MY_GAME',
    payload
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(MyGames)
