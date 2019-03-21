import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import JoinGames from '../containers/JoinGames'


function TabContainer(props) {
  console.log(props)
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


const styles = {
  root: {
    flexGrow: 1,
  },
};

class CenteredTabs extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      value: 0

    }
    this.day = this.day.bind(this)
  }

  day () {
    let week = new Array('Sunday', 
                         "Monday",
                         "Tuesday",
                         "Wednesday",
                         "Thursday",
                         "Friday",
                         "Saturday")
    let date = new Date()
    let day = date.getDay()
    console.log(week[day])
    return day
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    let week = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date()
    let day = date.getDay()
    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
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
        {this.state.value === 0 && <TabContainer><JoinGames /></TabContainer>}
        {this.state.value === 1 && <TabContainer></TabContainer>}
        {this.state.value === 2 && <TabContainer></TabContainer>}
        {this.state.value === 3 && <TabContainer></TabContainer>}
        {this.state.value === 4 && <TabContainer></TabContainer>}
        {this.state.value === 5 && <TabContainer></TabContainer>}
        {this.state.value === 6 && <TabContainer></TabContainer>}
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);