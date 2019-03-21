import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 16
  },
  pos: {
    marginBottom: 12
  }
}

class JoinGameCard extends React.Component {
  render () {
    const { title, date, time, description, joined } = this.props
    return (
      <Card >
        <CardContent>
          <Typography color='textSecondary' gutterBottom>
            {title}
          </Typography>
          <Typography variant='h5' component='h2'>
            {date}
          </Typography>
          <Typography color='textSecondary'>
            {time}
          </Typography>
          <Typography component='p'>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary'>Join</Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(JoinGameCard)
