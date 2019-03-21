import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import JoinButton from './JoinButton'

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

let id = 0
function createData (name, calories, fat, carbs, protein) {
  id += 1
  return { id, name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
]

class JoinTable extends React.Component {
  render () {
    const { title, date, time, description, joined } = this.props
    return (
      <Paper >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align='right'>Time</TableCell>
              <TableCell align='right'>Description</TableCell>
              <TableCell align='right'># joined</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            <TableRow>
              <TableCell component='th' scope='row'>
                {date}
              </TableCell>
              <TableCell align='right'>{time}</TableCell>
              <TableCell align='right'>{description}</TableCell>
              <TableCell align='right'>{joined}</TableCell>
              <TableCell align='right'><JoinButton /></TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </Paper>
    )
  }
}

JoinTable.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(JoinTable)
