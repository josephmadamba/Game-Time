import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

function PaperSheet (props) {
  const { classes } = props
  console.log(props)
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant='h5' component='h3' align='center'>
          You currently don't have any games saved!
        </Typography>
        <Typography component='p' align='center'>
          <Button variant='contained' className={classes.button} onClick={() => {
            props.tab('click', 0)
          }}>
            Click Here to check some out!
          </Button>
        </Typography>
      </Paper>
    </div>
  )
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PaperSheet)
