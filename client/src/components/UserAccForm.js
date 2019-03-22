import React from 'react'
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
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


const UserAccForm = ({method, value, name,type, failed, classes}) => {

  return (
      <React.Fragment>
    {failed? <TextField
        error
        required
          id="standard-text"
          label={name}
          type={type}
          value={value}
          onChange={(e)=>{method(e)}}
          className={classes.textField}
          margin="normal"
        />:
    <TextField
    required
          id="standard-text"
          label={name}
          type={type}
          value={value}
          onChange={(e)=>{method(e)}}
          className={classes.textField}
          margin="normal"
        />}

        {failed? <p>{name} is invalid</p>: null}
        </React.Fragment>

  )
}
UserAccForm.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(UserAccForm)
