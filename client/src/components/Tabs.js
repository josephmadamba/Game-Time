import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import JoinGameDayTabs from '../containers/JoinGameDayTabs'
import CreateGames from './CreateGames'
import MyGamesTab from '../containers/MyGamesTab'
import About from './About';
import MyCreateGame from '../containers/MyCreateGame';
import { connect } from 'react-redux'
import UserEntry from '../containers/UserEntry'
import Measure from 'react-measure'
import FAQ from './FAQ';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


const styles = {
  root: {
    flexGrow: 0,
    justifyContent: 'center',
    flexShrink: 0
  },
};

class CenteredTabs extends React.Component {
  state = {
    value: 0,
    appBarWidth: 1179
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props
    const { appBarWidth } = this.state

    return (
      <React.Fragment>
          <Measure
          bounds
          onResize={(contentRect) => {
            this.setState({ appBarWidth: contentRect.bounds.width });
          }}
        >
          {({ measureRef }) => (
            <div ref={measureRef}>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered={appBarWidth > 1179}
            scrollable={appBarWidth < 1179}
          >
            <Tab label="Join Games" />
            <Tab label="Create Games" />
            <Tab label="My Joined Games" />
            <Tab label='My Created Games'/>
            <Tab label="FAQ" />
            <Tab label="About" />
          </Tabs>
          {this.state.value === 0 && <TabContainer><JoinGameDayTabs/></TabContainer>}
          {this.state.value === 1 && <TabContainer>
            
            
            {this.props.user.id ?<CreateGames tab={this.handleChange}/>
            :<div style={{textAlign: 'center'}}> 
              <h2>Please log in to use this feature</h2> <br/>
              <UserEntry/>  
            </div> }
            </TabContainer>}
          {this.state.value === 2 && <TabContainer> {this.props.user.id ? <MyGamesTab tab={this.handleChange} /> : 
            <div style={{textAlign: 'center'}}> 
              <h2>Please log in to use this feature</h2> <br/>
              <UserEntry/>  
            </div> } </TabContainer> }
          {this.state.value === 3 && <TabContainer> 
            {this.props.user.id? <MyCreateGame tab={this.handleChange}/>: 
            <div style={{textAlign: 'center'}}> 
              <h2>Please log in to use this feature</h2> <br/>
              <UserEntry/>  
            </div>
            }
            </TabContainer>}
          {this.state.value === 4 && <TabContainer><FAQ/></TabContainer>}
          {this.state.value === 5 && <TabContainer><About/></TabContainer>}
      </Paper>
      </div>
        )}
      </Measure>
    </React.Fragment>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect (mapStateToProps)(withStyles(styles)(CenteredTabs));