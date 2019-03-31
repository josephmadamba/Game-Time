import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Video from '../img/shot.gif'
import WOW from 'wowjs'
import GOT from '../img/Got.png'
import GAME from '../img/game.png'
import CREATE from '../img/createbutton.png'
import OR from '../img/Or.png'
import JOIN from '../img/joinbutton.png'
import A from '../img/a.png'
import GAMEREG from '../img/gamereg.png'
import TODAY from '../img/today.png'

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    height: '100%', 
    maxHeight: 500
  },
  video: {
    backgroundImage: `url(${Video})`,
    width: '100vw',
    height: '100vh',
    zIndex: '-100',
    position: 'fixed',
    background: 'scroll',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  got: {
    width: "67%",
    height: "50%",
  },
  game: {
    width: "100%",
    height: "50%"
  },
  create: {
    width: "100%",
    height: "50%",
    margin: 'theme.spacing.unit'
  },
  or: {
    width: "10%",
    height: "50%",
    align: "right"
  },
  join: {
    width: "100%",
    height: "50%"
  },
  a: {
    width: "5%",
    height: "50%"
  },
  gamereg: {
    width: "20%",
    height: "50%"
  },
  today: {
    width: "24%",
    height: "50%"
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

      <div className={classes.root}>
        <div className={classes.video} />
   
        <Typography align='center'>
          {/* &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; */}

          <img className={`${classes.got} wow bounceInLeft`} data-wow-duration='2.1s' data-wow-delay='2s' src={GOT} alt='' />
        </Typography>

        <Typography align='center'>
         {/* &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; */}
          <img className={`${classes.game} wow bounceInUp`} data-wow-duration='2s' data-wow-delay='2.2s' src={GAME} alt='' />
        </Typography>

        <br/> <br/> <br/> <br/>  <br/> <br/>  <br/> <br/> 

        <Typography align='center'> 
        {/* &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; */}

          
            <Button href='/user/account'>
              <img className={`${classes.create} wow bounceInLeft`} data-wow-duration='2s' data-wow-delay='6s' src={CREATE} alt='' /> 
            </Button>
       
           <br/>

          {/* &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  */}

          <img className={`${classes.or} wow bounceInRight`} data-wow-duration='2s' data-wow-delay='6.1s'  src={OR} alt='' /> <br/>

          {/* &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  */}
          <Button href='/user/account'>
            <img className={`${classes.join} wow bounceInRight`} data-wow-duration='2s' data-wow-delay='6.2s' src={JOIN} alt='' />
          </Button>
        </Typography>
       
        <Typography align='center'>
          {/* &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  */}

          <img className={`${classes.a} wow bounceInLeft`} data-wow-duration='2s' data-wow-delay='6.3s' src={A} alt='' /> &nbsp;&nbsp;

          &nbsp; 

          <img className={`${classes.gamereg} wow bounceInLeft`} data-wow-duration='2s' data-wow-delay='6.4s' src={GAMEREG} alt='' /> &nbsp; &nbsp; 

          &nbsp; 

          <img className={`${classes.today} wow bounceInRight`} data-wow-duration='2s' data-wow-delay='6.5s' src={TODAY} alt='' />
        </Typography>

      </div>
    )
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Landing)
