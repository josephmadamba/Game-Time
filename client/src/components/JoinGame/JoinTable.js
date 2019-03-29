import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
})

function SimpleTable ({ classes, date, time, description, id, index, user, title }) {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align='right'>Time</TableCell>
            <TableCell align='left'>Description</TableCell>
            <TableCell align='left'># index</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          <TableRow>
            <TableCell component='th' scope='row'>
              {date}
            </TableCell>
            <TableCell align='right'>{time}</TableCell>
            <TableCell align='left'>{description}</TableCell>
            <TableCell align='left'>{index}</TableCell>
            <TableCell align='right'>
              {user.id ? <Button variant='contained' color='primary' onClick={(userID, gameID, dateJoin, timeJoin, titleJoin, descriptionJoin) => {
                console.log('clicked', date, description, time, id, user.id)
                axios.post('/mygames', {
                  userID: user.id,
                  gameID: id,
                  dateJoin: date,
                  timeJoin: time,
                  titleJoin: title,
                  descriptionJoin: description
                })
              }} >
                  Join
              </Button> : <Button variant='contained' color='primary' href='./user/account'>
                  Join
              </Button>}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleTable)
