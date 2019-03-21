import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '../components/JoinGame/JoinGameList'

class JoinGames extends Component {
  componentDidMount () {

  }

  render () {
    console.log(this.props.gameData)
    return (
      <React.Fragment>
        {this.props.gameData.map((data, index) => {
          return (
            <List title={data.title}
              time={data.time}
              date={data.date}
              description={data.description}
              joined={data.joined} />
          )
        })}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  gameData: state.games.gameData
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(JoinGames)
