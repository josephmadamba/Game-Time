import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import JoinTable from './JoinTable'

const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
})

function SimpleExpansionPanel (props) {
  const { myGames, addMyGames, classes, title, date, time, description, index, user, gameid, button, city, state, address, zip } = props
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <JoinTable title={title}
            time={time}
            date={date}
            description={description}
            index={index}
            user={user}
            gameid={gameid}
            button={button}
            addMyGames={addMyGames}
            myGames={myGames}
            city={city}
            state={state}
            zip={zip}
            address={address} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleExpansionPanel)
