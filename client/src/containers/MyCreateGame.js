import React, { Component } from "react";
import axios from 'axios'

import { connect } from "react-redux";
import UserEntry from "./UserEntry";
import '../styles/mycreategames.css'
class MyCreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {show:false};
  }

  componentDidMount(){
    axios.get(`/api/dashboard/${this.props.user.id}`)
    .then(data=>{
        console.log('This is data', data)
    })
    .catch(er=>{
        console.log('This is the er', er)
    })
  }
  componentDidUpdate(){
      if(this.props.user.id){
        axios.get(`/api/dashboard/${this.props.user.id}`)
        .then(data=>{
            console.log('This is data', data)
        })
        .catch(er=>{
            console.log('This is the er', er)
        })
      }
  }



  render() {
    return (
      <React.Fragment>
        {this.props.user.id ? (
          <div>
              Hi
          </div>
        ) : (
          <React.Fragment>
            <h3 className='user-title'>Please log in to use this feature</h3>
            <UserEntry />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCreateGame);
