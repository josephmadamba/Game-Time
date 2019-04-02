import React, { Component } from 'react'
import axios from 'axios'
import NoMyGames from '../components/NoMyGames'
import { connect } from 'react-redux'
import '../styles/mycreategames.css'
import List from '../components/JoinGame/JoinGameList'
import { ClipLoader } from 'react-spinners'
import { css } from '@emotion/core'
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`

class MyCreateGame extends Component {
  constructor (props) {
    super(props)
    this.state = { show: false }
  }

  componentDidMount () {
    axios.get(`api/mygames/${this.props.user.id}`)
      .then(data => {
        this.props.addCreateGames(data.data.games)
        this.setState({ show: true })
      })
      .catch(er => {
        console.log(er)
      })
  }

  render () {
    return (
      <React.Fragment>

        { this.state.show

          ? this.props.createdGames.length !== 0
            ? this.props.createdGames.map((data, index) => (
              <List index={index}
                title={data.title}
                time={data.time}
                date={data.date}
                description={data.description}
                user={this.props.user}
                gameid={data.id}
                addMyGames={this.props.addCreateGames}
                myGames={this.props.myGames.length}
                button={'remove'}
              />
            ))
            : <NoMyGames tab={this.props.tab} />
          : <div className='loadinClip'><ClipLoader
            css={override}
            sizeUnit={'px'}
            size={150}
            color={'#123abc'}
            loading={this.state.loading}
          />
          </div>

        }

      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  createdGames: state.myCreatedGame,
  myGames: state.myGames
})

const mapDispatchToProps = (dispatch) => ({

  addCreateGames: (data) => dispatch({ type: 'GET_MY_GAME', value: data })

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCreateGame)
