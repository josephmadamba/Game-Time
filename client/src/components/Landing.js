import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Video from '../img/shot.gif'
import WOW from 'wowjs'
import GOT from '../img/GOT.png'
import GAME from '../img/Game.png'
import CREATE from '../img/Create.png'
import OR from '../img/or.png'
import JOIN from '../img/Join.png'
import A from '../img/A.png'
import GAMEREG from '../img/GameReg.png'
import TODAY from '../img/Today.png'

const styles = theme => ({
  video: {
    backgroundImage: `url(${Video})`,
    width: '100vw',
    height: '100vh',
    zIndex: '-100',
    padding: '0',
    margin: '0',
    position: 'fixed',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundize: 'cover',
    backgroundSize: '100vw 100vh'
  }
})

class Landing extends Component {
  componentDidMount () {
    const wow = new WOW.WOW()
    wow.init()
  }
  render () {
    const { classes } = this.props
    return (

      <div>
        <div className={classes.video} />

        {/* <video className={classes.video} id='background-video' autoPlay loop>
          <source src={Video} type='video/mp4' />
        </video> */}
        <section class='wow bounceInLeft' data-wow-duration='1s' data-wow-delay='1s'>
          <img src={GOT} alt='' />
        </section>
        <section class='wow bounceInLeft' data-wow-duration='1s' data-wow-delay='1.5s'>
          <img src={GAME} alt='' />
        </section>
        <section class='wow bounceInLeft' data-wow-duration='1s' data-wow-delay='2.5s'>
          <img src={CREATE} alt='' />
        </section>
        <section class='wow bounceInLeft' data-wow-duration='1s' data-wow-delay='3s'>
          <img src={OR} alt='' />
        </section>
        <section class='wow bounceInLeft' data-wow-duration='1s' data-wow-delay='3.5s'>
          <img src={JOIN} alt='' />
        </section>
        <section class='wow bounceInLeft' data-wow-duration='1s' data-wow-delay='4s'>
          <img src={A} alt='' />
        </section>
        <section class='wow bounceInLeft' data-wow-duration='1s' data-wow-delay='4.5s'>
          <img src={GAMEREG} alt='' />
        </section>
        <section class='wow bounceInLeft' data-wow-duration='1s' data-wow-delay='5s'>
          <img src={TODAY} alt='' />
        </section>

      </div>
    )
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Landing)
