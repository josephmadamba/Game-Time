import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import setMinutes from "date-fns";
import setHours from "date-fns";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TitleBar from "./TitleBar";
import SubmitButton from "./SubmitButton";












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
    button: {
        margin: theme.spacing.unit,
        width: "fit-content"
      }
  

});



class CreateGames extends React.Component {
    constructor(props) {
        super(props)
       this.state = {
            name: "",
            age: "",
            multiline: "",
            startDate: new Date(),
            gameName: '',
            gameNameEr: false,
            gameAddress: '',
            gameAddressEr: false,
            gameCity: '',
            gameCityEr: false,
            gameSt: '',
            gameStEr: false,
            gameZip: '',
            gameZipEr: false,
            gameDesc: '',
            gameDescEr: false,
    
        };
    
        
    }


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
    
    handleSubmit(evt) {
        console.log('hello')
        evt.preventDefault()
    }
    
    
    // handleGameName(evt) {
    //     this.setState({ gameName: evt.target.value, gameNameEr: false });
    // }

    // handleGameAddress(evt) {
    //     this.setState({ gameAddress: evt.target.value, gameAddressEr: false });
    // }

    // handleGameCity(evt) {
    //     this.setState({ gameCity: evt.target.value, gameCityEr: false });
    // }
    
    // handleGameSt(evt) {
    //     this.setState({ gameSt: evt.target.value, gameStEr: false });
    // }

    // handleGameZip(evt) {
    //     this.setState({ gameZip: evt.target.value, gameZipEr: false });
    // }

    // handleGameDesc(evt) {
    //     this.setState({ gameDesc: evt.target.value, gameDescEr: false });
    // }

    
    handleCreateGame(evt) {
        evt.preventDefault();
        axios
          .post("/games/create", {
            game: { gameName: this.state.gameName, gameAddress: this.state.gameAddress, email: this.state.email }
          })
          .then(res => {
            if (res.data.success) {
              this.setState({ usernameErr: false, passwordErr: false, emailErr: false });
              this.props.updateUser(res.data.user)
              this.props.history.push('/dashboard')
    
            } else {
              this.setState({ usernameErr: true, emailErr: true });
            }
          });
      }
 
    
  
render() {
    const { classes } = this.props;

    return (
      <div>
            <form className={classes.container} noValidate autoComplete="off" onSubmit={(evt)=>{this.handleSubmit(evt)}}>
        
          <TitleBar/>
          
          
          <TextField
          required
          id="outlined-name"
          label="Name Your Game"
          className={classes.textField}
          value={this.state.gameName}
          onChange={this.handleChange("gameName")}
          margin="normal"
          variant="outlined"
        />

        
        
        


        <TextField
            required
          id="outlined-multiline-flexible"
          label="Game Address"
          multiline
          rowsMax="4"
          value={this.state.gameAddress}
          onChange={this.handleChange("gameAddress")}
          className={classes.textField}
          margin="normal"
          helperText="Where is the game located?"
          variant="outlined"
        />

        <TextField
        required
          id="outlined-multiline-flexible"
          label="City"
          multiline
          rowsMax="4"
          value={this.state.gameCity}
          onChange={this.handleChange("gameCity")}
          className={classes.textField}
          margin="normal"
          helperText="ex. Houston"
          variant="outlined"
        />

        <TextField
        required
          id="outlined-multiline-flexible"
          label="State"
          multiline
          rowsMax="1"
          value={this.state.gameSt}
          onChange={this.handleChange("gameSt")}
          className={classes.textField}
          margin="normal"
          helperText="ex. TX not Texas"
          variant="outlined"
        />

        <TextField
        required
          id="outlined-multiline-flexible"
          label="Zip Code"
          multiline
          rowsMax="1"
          value={this.state.gameZip}
          onChange={this.handleChange("gameZip")}
          className={classes.textField}
          margin="normal"
          helperText="Zip  Code"
          variant="outlined"
        />

        <TextField
        required
          id="outlined-multiline-flexible"
          label="Describe your game..."
          multiline
          rowsMax="10"
          value={this.state.gameDesc}
          onChange={this.handleChange("gameDesc")}
          className={classes.textField}
          margin="normal"
          helperText="is there a fee? is it coed? etc."
          variant="outlined"
        />

      <DatePicker
          selected={this.state.startDate}
          onChange={(e) => this.handleInput(e)}
          className={classes.textField}          
          showTimeSelect
          timeFormat="H:mm"
          timeIntervals={30}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
      />

            <Button
                variant="contained"
                className={classes.button}
                type="submit"
              >
                Submit
              </Button>
            

        
        </form>
        </div>
    );
  }
}

CreateGames.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateGames); 