import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { connect } from 'react-redux'
import List from '../components/JoinGame/JoinGameList'

class CenteredTabs extends React.Component {
  // const classes = useStyles()
  constructor(props) {
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


  render() {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
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
        centered
      >
        <Tab label={week[day] + ' (today)'} />
        <Tab label={week[(day + 1) % 7] + ' (tomorrow)'} />
        <Tab label={week[(day + 2) % 7]} />
        <Tab label={week[(day + 3) % 7]} />
        <Tab label={week[(day + 4) % 7]} />
        <Tab label={week[(day + 5) % 7]} />
        <Tab label={week[(day + 6) % 7]} />
      </Tabs>
      
      {/* NEED TO FIGURE OUT HOW TO RENDER THE RIGHT GAMES IN THEIR RESPECTIVE TABS */}
      {this.state.value === 0 && 
        this.props.gameData.map((data, index) => {
          console.log(data)
          return (
            // MATCH DATE OF TODAY AND RENDER OUT THE GAMES
            data.date === '03/22/2019' ? <List key={index}
            title={data.title}
            time={data.time}
            date={data.date}
            description={data.description}
            joined={data.joined} /> : null
            
          )
        })}
      {this.state.value === 1 && this.props.gameData.map((data, index) => {
          console.log(data)
          return (
          // MATCH DATE OF TOMORROW AND RENDER OUT THE GAMES...
          data.date === '03/23/2019' ? <List key={index}
          title={data.title}
          time={data.time}
          date={data.date}
          description={data.description}
          joined={data.joined} /> : null)
         
        })}
      {this.state.value === 2 && <h2>hi</h2>}
      {this.state.value === 3 && <h2>hi</h2>}
      {this.state.value === 4 && <h2>hi</h2>}
      {this.state.value === 5 && <h2>hi</h2>}
      {this.state.value === 6 && <h2>hi</h2>}
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


