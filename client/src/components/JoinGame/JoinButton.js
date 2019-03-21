import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class JoinButton extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  handleClick (evt) {

  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" >
        Join
      </Button>
      </div>
    )
  }
}
