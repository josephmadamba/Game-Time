import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class MapContainer extends Component {
  constructor(props){
      super(props)
      this.state = {

      }
  }

  render() {
    return (
      <div>
          Hello
        <div id='mapid'></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
