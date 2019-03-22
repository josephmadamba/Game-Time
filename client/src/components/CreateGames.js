import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import setMinutes from "date-fns";
import setHours from "date-fns";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';












const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  

});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

class CreateGames extends React.Component {
  state = {
    name: "",
    age: "",
    multiline: "",
    startDate: new Date()
  };

  
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleInput(date) {
    this.setState({
      startDate: date
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <div style={{width:"100%"}}>
      <form className={classes.container} noValidate autoComplete="off">
        
          
          
          
          <TextField
          id="outlined-name"
          label="Name Your Game"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange("name")}
          margin="normal"
          variant="outlined"
        />

        
        
        


        <TextField
          id="outlined-multiline-flexible"
          label="Game Address"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange("multiline")}
          className={classes.textField}
          margin="normal"
          helperText="Where is the game located?"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-flexible"
          label="City"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange("multiline")}
          className={classes.textField}
          margin="normal"
          helperText="ex. Houston"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-flexible"
          label="State"
          multiline
          rowsMax="1"
          value={this.state.multiline}
          onChange={this.handleChange("multiline")}
          className={classes.textField}
          margin="normal"
          helperText="ex. TX not Texas"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Zip Code"
          multiline
          rowsMax="1"
          value={this.state.multiline}
          onChange={this.handleChange("multiline")}
          className={classes.textField}
          margin="normal"
          helperText="Zip  Code"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Describe your game..."
          multiline
          rowsMax="10"
          value={this.state.multiline}
          onChange={this.handleChange("multiline")}
          className={classes.textField}
          margin="normal"
          helperText="is there a fee? is it coed? etc."
          variant="outlined"
        />

      <DatePicker
          selected={this.state.startDate}
          onChange={(e)=>this.handleInput(e)}
          showTimeSelect
          timeFormat="H:mm"
          timeIntervals={30}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
      />

  

        
        </form>
        </div>
    );
  }
}

CreateGames.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateGames); withStyles(styles)(ButtonAppBar);