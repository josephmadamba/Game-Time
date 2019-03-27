import React from "react";
import PropTypes, { number } from "prop-types";
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
import { connect } from "react-redux";
import SuccessCreate from "./SuccessCreate";
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';
import '../styles/loading.css'
// import { WSAECONNREFUSED } from "constants";









const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


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
            submit: false
    
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
      this.setState({submit: true})
        evt.preventDefault();
        let dayNumber = this.getDay()
        let date = this.getDate()
        console.log('this is dayNum', dayNumber)
        console.log('date', date)
        this.handleCreateGame(date[1], dayNumber, date[2].slice(0,5), this.state.gameName, this.state.gameDesc, this.props.user.id )
    }
    
    
    componentDidUpdate() {
       

    }
    
    getDay() {
        let day = this.state.startDate
        return day.getUTCDay()
    }
    getDate() {
        let str = JSON.stringify(this.state.startDate)
        console.log('This is str from getData', str)
        let string = str.replace('"', 'T')
        console.log(string)
        let data = string.split('T')
        console.log(data)

        return data
    }

    handleCreateGame(date,day,time,title,description,user) {
        axios
            .post("/games/create/", {
                date: date,
                day: day,
                time: time,
                title: title,
                description: description,
                user:user

          })
            .then(res => {
                console.log(res.data)
                if(res.data.success){
                  


                    this.setState({submit: false});

                  console.log(this.props)
                  this.props.history.push('/dashboard')
                }
            })
            .catch(er=>{
                console.log(er)
            })
     
    }


    




    
  
render() {
    const { classes } = this.props;

    return (
      <div>

        {this.state.submit?   <div className='loadinClip'><ClipLoader
  css={override}
  sizeUnit={"px"}
  size={150}
  color={'#123abc'}
  loading={this.state.loading}
/> 
</div>:
        

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
}
        </div>
        
    );
  }
}

CreateGames.propTypes = {
  classes: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    user : state.user
});
  

const mapDispatchToProps = dispatch => ({

  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(CreateGames)); 