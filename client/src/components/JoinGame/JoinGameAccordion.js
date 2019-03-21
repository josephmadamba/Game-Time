import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import JoinButton from './JoinButton'

class SimpleExpansionPanel extends React.Component {
  render() {
    const { title, date, time, description, joined} = this.props
  return (
    <div >
      <ExpansionPanel>
        <ExpansionPanelSummary >
          <Typography>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {date}
          </Typography>
          <Typography>
            {time}
          </Typography>
          <Typography>
            {description}
          </Typography>
          <JoinButton />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
  }
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SimpleExpansionPanel;