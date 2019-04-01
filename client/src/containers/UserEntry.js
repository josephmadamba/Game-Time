import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import UserAccForm from "../components/UserAccForm";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "../styles/UserAcc.css";
import { connect } from "react-redux";


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 'fit-content',
    margin: 'auto'
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: theme.spacing.unit,
    width: "fit-content"
  },
  input: {
    display: "none"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class UserEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      username: "",
      usernameErr: false,
      password: "",
      passwordErr: false,
      email: '',
      emailErr: false,

      userLog: "",
      userLogEr: false,
      passLog: "",
      passLogEr: false
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogUser = this.handleLogUser.bind(this);
    this.handleLogPass = this.handleLogPass.bind(this);
    this.handleEmail = this.handleEmail.bind(this)

  }

  handleChange = (event, value) => {
    this.setState({ value: value });
  };
  handleUsername(evt) {
    this.setState({ username: evt.target.value, usernameErr: false });
  }
  handlePassword(evt) {
    if (evt.target.value.length < 8) {
      this.setState({ passwordErr: true, password: evt.target.value });
    } else {
      this.setState({ password: evt.target.value, passwordErr: false });
    }
  }

  handleLogUser(evt) {
    this.setState({ userLog: evt.target.value, userLogEr: false });
  }
  handleLogPass(evt) {
    this.setState({ passLog: evt.target.value, passLogEr: false });
  }

  handleEmail(evt){
    this.setState({email: evt.target.value, emailErr: false})
  }



  handleUserRegister(evt) {
    evt.preventDefault();
    axios
      .post("/pickup/create/user", {
        user: { username: this.state.username, password: this.state.password, email: this.state.email }
      })
      .then(res => {
        if (res.data.success) {
          this.setState({ usernameErr: false, passwordErr: false, emailErr: false });
          this.props.updateUser(res.data.user)
          this.props.history.push('/dashboard')

        } else {
          this.setState({ usernameErr: true, emailErr: true });
        }
      })
      .catch(er=>{
        console.log(er)
      })
  }

  handleUserLogin(evt) {
    evt.preventDefault();
    axios
      .get("/pickup/login", {
        params: { username: this.state.userLog, password: this.state.passLog }
      })
      .then(res => {
        if (res.data.success) {
             console.log(res.data)
          this.setState({ userLogEr: false, passLogEr: false });
          this.props.updateUser(res.data.user)

          this.props.history.push('/dashboard')
        } else {
          this.setState({ userLogEr: true, passLogEr: true });
        }
      })
      .catch(er=>{
        console.log(er)
      })
  }

  componentDidMount(){
    // axios.get()
    // WILL TRY TO CREATE SESSIONS
  }


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={this.state.value} className='tabs' onChange={this.handleChange}>
            <Tab label="Register" />
            <Tab label="Login" />
          </Tabs>
        </AppBar>
        {this.state.value === 0 && (
          <TabContainer>
              <h1 className='header'>Register</h1>
            <form
              className="sign-in-form"
              onSubmit={e => {
                this.handleUserRegister(e);
              }}
            >
              <UserAccForm
                method={this.handleUsername}
                value={this.state.username}
                name={"Username"}
                type={"text"}
                failed={this.state.usernameErr}
                classes={classes}
              />
              <UserAccForm
                method={this.handlePassword}
                value={this.state.password}
                name={"Password"}
                type={"password"}
                failed={this.state.passwordErr}
                classes={classes}
              />
              <UserAccForm
                method={this.handleEmail}
                value={this.state.email}
                name={"email"}
                type={"email"}
                failed={this.state.emailErr}
                classes={classes}
              />
              <Button
                variant="contained"
                className={classes.button}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </TabContainer>
        )}
        {this.state.value === 1 && (
          <TabContainer>
              <h1 className='header'>Login</h1>
            <form
              className="sign-in-form"
              onSubmit={e => {
                this.handleUserLogin(e);
              }}
            >
              <UserAccForm
                method={this.handleLogUser}
                value={this.state.userLog}
                name={"Username"}
                type={"text"}
                failed={this.state.userLogEr}
                classes={classes}
              />
              <UserAccForm
                method={this.handleLogPass}
                value={this.state.passLog}
                name={"Password"}
                type={"password"}
                failed={this.state.passLogEr}
                classes={classes}
              />
              <Button
                variant="contained"
                className={classes.button}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </TabContainer>
        )}
      </div>
    );
  }
}

UserEntry.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user : state.user
  });
  
  const mapDispatchToProps = dispatch => ({
    updateUser: (user) =>{dispatch({type:'UPDATE_USER', value: user})}
  });


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(UserEntry));
