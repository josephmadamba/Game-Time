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

function SimpleTable ({ myGames, classes, date, time, description, gameid, index, user, title, button, addMyGames }) {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align='right'>Time (24h)</TableCell>
            <TableCell align='left'>Description</TableCell>
            <TableCell align='left'>Creator</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          <TableRow>
            <TableCell component='th' scope='row'>
              {date}
            </TableCell>
            <TableCell align='right'>{time}</TableCell>
            <TableCell align='left'>{description}</TableCell>
            <TableCell align='left'>{user.username}</TableCell>
            <TableCell align='right'>
              {user.id
                ? button === 'Join'
                  ? <Button variant='contained' color='primary' onClick={() => {
                    axios.post('/mygames', {
                      userID: user.id,
                      gameID: gameid,
                      dateJoin: date,
                      timeJoin: time,
                      titleJoin: title,
                      descriptionJoin: description
                    })
                  }} >
                    {button}
                  </Button>
                  : <Button variant='contained' color='primary' onClick={() => {
                    axios.delete('/api/delete/games', {
                      data: {
                        user_id: user.id,
                        game_id: gameid
                      }
                    })
                      .then(() => {
                        axios.get('/mygames', { params: { user: user.id } })
                          .then(games => {
                            addMyGames(games.data.data)
                          })
                      })
                      .catch(error => {
                        console.log(error)
                      })
                  }} >
                      Cancel
                  </Button>

                : <Button variant='contained' color='primary' href='./user/account'>
                  {button}
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
