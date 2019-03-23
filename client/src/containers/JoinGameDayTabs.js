import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { connect } from 'react-redux'
import List from '../components/JoinGame/JoinGameList'

class CenteredTabs extends React.Component {
  // const classes = useStyles()
  constructor (props) {
    super(props)

    this.state = {
      value: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt, newValue) {
    this.setState({
      value: newValue
    })
  }

  render () {
    let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    let date = new Date()
    let day = date.getDay()
    console.log(date)
    console.log(day)
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
        >
          <Tab label='All Games' />
          <Tab label={week[day] + ' (today)'} />
          <Tab label={week[(day + 1) % 7] + ' (tom)'} />
          <Tab label={week[(day + 2) % 7]} />
          <Tab label={week[(day + 3) % 7]} />
          <Tab label={week[(day + 4) % 7]} />
          <Tab label={week[(day + 5) % 7]} />
          <Tab label={week[(day + 6) % 7]} />
        </Tabs>

        {/* NEED TO FIGURE OUT HOW TO RENDER THE RIGHT GAMES IN THEIR RESPECTIVE TABS */}
        {this.state.value === 0 &&
        this.props.gameData.map((data, index) => {
          return (
            // MATCH DATE OF TODAY AND RENDER OUT THE GAMES
            <List key={index}
              title={data.title}
              time={data.time}
              date={data.date}
              description={data.description}
              joined={data.joined} />

          )
        })}
        {this.state.value === 1 && this.props.gameData.map((data, index) => {
          return (
            data.day === 1 ? <List key={index}
              title={data.title}
              time={data.time}
              date={data.date}
              description={data.description}
              joined={data.joined} /> : null)
        })}
        {this.state.value === 2 && this.props.gameData.map((data, index) => {
          return (
            data.day === 2 ? <List key={index}
              title={data.title}
              time={data.time}
              date={data.date}
              description={data.description}
              joined={data.joined} /> : null)
        })}{this.state.value === 3 && this.props.gameData.map((data, index) => {
          return (
            data.day === 3 ? <List key={index}
              title={data.title}
              time={data.time}
              date={data.date}
              description={data.description}
              joined={data.joined} /> : null)
        })}{this.state.value === 4 && this.props.gameData.map((data, index) => {
          return (
            data.day === 4 ? <List key={index}
              title={data.title}
              time={data.time}
              date={data.date}
              description={data.description}
              joined={data.joined} /> : null)
        })}{this.state.value === 5 && this.props.gameData.map((data, index) => {
          return (
            data.day === 5 ? <List key={index}
              title={data.title}
              time={data.time}
              date={data.date}
              description={data.description}
              joined={data.joined} /> : null)
        })}{this.state.value === 6 && this.props.gameData.map((data, index) => {
          return (
            data.day === 6 ? <List key={index}
              title={data.title}
              time={data.time}
              date={data.date}
              description={data.description}
              joined={data.joined} /> : null)
        })}
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({
  gameData: state.games.gameData
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CenteredTabs)
