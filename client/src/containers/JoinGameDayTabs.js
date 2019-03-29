import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { connect } from 'react-redux'
import List from '../components/JoinGame/JoinGameList'
import axios from 'axios'

class CenteredTabs extends React.Component {
  // const classes = useStyles()
  constructor (props) {
    super(props)

    this.state = {
      value: 0,
      showGames: null,
      getGames: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt, newValue) {
    this.setState({
      value: newValue
    })
  }

  componentDidMount () {
    this.setState({ getGames: false })
    console.log('this.props.gameData ', this.props.gameData)
    axios.get('/api/dashboard')
      .then(games => {

        this.props.updateGames(games.data.data)
        this.setState({ getGames: true })
      })
  }

  render () {
    let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    let date = new Date()
    let day = date.getDay()
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
        >
{console.log(day, (day + 1) % 7, (day + 2) % 7, (day + 3) % 7 ,(day + 4) % 7 , (day + 5) % 7, (day + 6) % 7)}
          <Tab label='All Games' />
          <Tab label={week[day] + ' (today)'} />
          <Tab label={week[(day + 1) % 7] + ' (tom)'} />
          <Tab label={week[(day + 2) % 7]}/>
          <Tab label={week[(day + 3) % 7]} />
          <Tab label={week[(day + 4) % 7]} />
          <Tab label={week[(day + 5) % 7]} />
          <Tab label={week[(day + 6) % 7]} />
        </Tabs>
        {this.state.value === 0 &&
        this.state.getGames ? this.props.gameData.map((data, index) => {
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
          : null}
        {this.state.value === 1 &&
        this.state.getGames ? this.props.gameData.map((data, index) => {
            return (
              data.day === (day) % 7 ? <List index={index}
                title={data.title}
                time={data.time}
                date={data.date}
                description={data.description}
                user={this.props.user}
                id={data.id}
              /> : null)
          }) : null}
        {this.state.value === 2 &&
        this.state.getGames ? this.props.gameData.map((data, index) => {
            return (
              data.day === (day + 1) % 7 ? <List index={index}
                title={data.title}
                time={data.time}
                date={data.date}
                description={data.description}
                user={this.props.user}
                id={data.id}
              /> : null)
          }) : null}
        {this.state.value === 3 &&
        this.state.getGames ? this.props.gameData.map((data, index) => {
            return (
              data.day === (day + 2) % 7 ? <List index={index}
                title={data.title}
                time={data.time}
                date={data.date}
                description={data.description}
                user={this.props.user}
                id={data.id}
              /> : null)
          }) : null}
        {this.state.value === 4 &&
          this.state.getGames ? this.props.gameData.map((data, index) => {
            return (
              data.day === (day + 3) % 7 ? <List index={index}
                title={data.title}
                time={data.time}
                date={data.date}
                description={data.description}
                user={this.props.user}
                id={data.id}
              /> : null)
          }) : null}
        {this.state.value === 5 &&
          this.state.getGames ? this.props.gameData.map((data, index) => {
            return (
              data.day === (day + 4) % 7 ? <List index={index}
                title={data.title}
                time={data.time}
                date={data.date}
                description={data.description}
                user={this.props.user}
                id={data.id}
              /> : null)
          }) : null}
        {this.state.value === 6 &&
        this.state.getGames ? this.props.gameData.map((data, index) => {
            return (
              data.day === (day + 5) % 7 ? <List index={index}
                title={data.title}
                time={data.time}
                date={data.date}
                description={data.description}
                user={this.props.user}
                id={data.id}
              /> : null)
          }) : null}
        {this.state.value === 7 &&
        this.state.getGames ? this.props.gameData.map((data, index) => {
            return (
              data.day === (day + 6) % 7 ? <List index={index}
                title={data.title}
                time={data.time}
                date={data.date}
                description={data.description}
                user={this.props.user}
                id={data.id}
              /> : null)
          }) : null}
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({
  gameData: state.games,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  updateGames: games => dispatch({
    type: 'UPDATE_GAMES',
    payload: games
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(CenteredTabs)
