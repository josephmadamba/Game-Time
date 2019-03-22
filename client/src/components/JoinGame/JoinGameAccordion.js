import React from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import JoinTable from './JoinTable'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

class SimpleExpansionPanel extends React.Component {
  render () {
    const { title, date, time, description, joined } = this.props
    return (
      <div >
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{title}</Typography>
          </ExpansionPanelSummary >
          <ExpansionPanelDetails>
            <JoinTable title={title}
              time={time}
              date={date}
              description={description}
              joined={joined} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
}

export default SimpleExpansionPanel
