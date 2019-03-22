import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import JoinGames from '../../containers/JoinGames'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
})

function TabContainer (props) {
  console.log(props)
  return (
    <Typography component='div' style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  )
}

function CenteredTabs () {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  function handleChange (event, newValue) {
    setValue(newValue)
  }
  let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let date = new Date()
  let day = date.getDay()
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        centered
      >
        <Tab label={week[day] + ' (today)'} />
        <Tab label={week[(day + 1) % 7]} />
        <Tab label={week[(day + 2) % 7]} />
        <Tab label={week[(day + 3) % 7]} />
        <Tab label={week[(day + 4) % 7]} />
        <Tab label={week[(day + 5) % 7]} />
        <Tab label={week[(day + 6) % 7]} />
      </Tabs>
      {value === 0 && <TabContainer><JoinGames /></TabContainer>}
      {value === 1 && <TabContainer />}
      {value === 2 && <TabContainer />}
      {value === 3 && <TabContainer />}
      {value === 4 && <TabContainer />}
      {value === 5 && <TabContainer />}
      {value === 6 && <TabContainer />}
    </Paper>
  )
}

export default CenteredTabs
